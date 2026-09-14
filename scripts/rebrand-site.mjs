/** One-time content migration. Animation selectors and layout classes are preserved. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import generateModule from '@babel/generator';
import * as t from '@babel/types';
import { format } from 'prettier';
import { copy, assetReplacements } from './studio-copy.mjs';
import { photography } from '../src/data/media.js';

const traverse = traverseModule.default;
const generate = generateModule.default;
const inventory = new Set();
const normalize = value => value.replace(/\s+/g, ' ').trim();
async function files(directory) {
  return (await Promise.all((await readdir(directory, { withFileTypes: true })).map(entry => entry.isDirectory() ? files(`${directory}/${entry.name}`) : [`${directory}/${entry.name}`]))).flat();
}

for (const file of await files('src/components')) {
  if (!file.endsWith('.jsx') || file.includes('/apartments/details/') || file.includes('ApartmentsPageContent')) continue;
  const ast = parse(await readFile(file, 'utf8'), { sourceType: 'module', plugins: ['jsx'] });
  let needsSeal = false;
  traverse(ast, {
    JSXElement: {
      exit(path) {
        const attrs = path.node.openingElement.attributes;
        const classAttr = attrs.find(attr => t.isJSXAttribute(attr) && attr.name.name === 'className');
        const className = classAttr?.value?.value || '';
        if (className.includes('header-logo_bg')) {
          path.node.children = [t.jsxElement(t.jsxOpeningElement(t.jsxIdentifier('BrandSeal'), [], true), null, [], true)];
          needsSeal = true;
        }
        if (className === 'credits_logo') {
          classAttr.value.value = 'studio-credit-mark';
          path.node.children = [t.jsxText('AA')];
        }
        if (path.node.openingElement.name.name === 'img') {
          const src = attrs.find(attr => t.isJSXAttribute(attr) && attr.name.name === 'src')?.value?.value;
          const key = src?.match(/\/interiors\/(\w+)\.webp/)?.[1];
          if (key && photography[key]) {
            const alt = attrs.find(attr => t.isJSXAttribute(attr) && attr.name.name === 'alt');
            if (alt) alt.value = t.stringLiteral(photography[key].alt);
          }
        }
      },
    },
    JSXText(path) {
      const key = normalize(path.node.value);
      if (!key) return;
      inventory.add(key);
      if (copy[key]) path.node.value = copy[key];
    },
    StringLiteral(path) {
      if (!t.isJSXAttribute(path.parent) && !t.isJSXExpressionContainer(path.parent)) return;
      const value = path.node.value;
      if (assetReplacements[value]) path.node.value = assetReplacements[value];
      else if (copy[normalize(value)]) path.node.value = copy[normalize(value)];
      else if (value.startsWith('/apartments')) path.node.value = value.replace('/apartments', '/projects').replace('ground-floor-basement', 'villas').replace('ground-floor', 'homes').replace('penthouse-duplex', 'hospitality');
      else if (value.startsWith('https://maps.app.goo.gl')) path.node.value = 'https://www.google.com/maps/search/?api=1&query=Raipur+Chhattisgarh+India';
      else if (value.startsWith('tel:')) path.node.value = 'tel:+916260906952';
      else if (value.startsWith('mailto:')) path.node.value = 'mailto:hello@azureinteriors.example';
      else if (/^https:.*(?:facebook|instagram|linkedin|thefirstthelast)/.test(value)) path.node.value = '/contact';
      else if (value.startsWith('https://cdn.prod.website-files.com/') && value.includes('.pdf')) path.node.value = value.includes('privacidad') ? '/privacy' : '/terms';
    },
  });
  if (needsSeal) ast.program.body.unshift(t.importDeclaration([t.importDefaultSpecifier(t.identifier('BrandSeal'))], t.stringLiteral(file.includes('/layout/') ? './BrandSeal' : '../layout/BrandSeal')));
  if (!process.argv.includes('--inventory')) await writeFile(file, await format(generate(ast).code, { parser: 'babel' }));
}
if (process.argv.includes('--inventory')) console.log([...inventory].sort().join('\n'));
