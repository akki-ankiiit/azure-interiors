import { mkdir, stat, writeFile } from 'node:fs/promises';
import { photography } from '../src/data/media.js';

await mkdir('public/assets/interiors', { recursive: true });
const queue = Object.entries(photography);
await Promise.all(Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const [name, photo] = queue.shift();
    const file = `public/assets/interiors/${name}.webp`;
    if (await stat(file).catch(() => null)) continue;
    const url = `https://images.unsplash.com/photo-${photo.id}?auto=format&fit=crop&w=2000&q=85&fm=webp`;
    const response = await fetch(url, { signal: AbortSignal.timeout(60000) });
    if (!response.ok) throw new Error(`${name}: ${response.status}`);
    await writeFile(file, Buffer.from(await response.arrayBuffer()));
    console.log(`Downloaded ${name}`);
  }
}));
