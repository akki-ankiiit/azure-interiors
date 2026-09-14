/** Restore the locally hosted reference assets. Existing files are kept. */
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { flowers } from '../src/data/flowers.js';

const root = fileURLToPath(new URL("../", import.meta.url));
const manifest = JSON.parse(
  await readFile(resolve(root, "src/data/asset-manifest.json"), "utf8"),
);
manifest[
  "https://pub-157506367d4c4fa1825d7a6d26b687a2.r2.dev/tftl-logo_white.json"
] = "/assets/animations/tftl-logo_white.json";

const queue = Object.entries(manifest);
for (const flower of Object.values(flowers)) {
  for (const format of ['webm', 'mov']) {
    queue.push([
      `https://assets.example.com/flowers/${flower[format].split('/').pop()}`,
      flower[format],
    ]);
  }
}
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const [url, localPath] = queue.shift();
      const destination = resolve(root, "public", localPath.slice(1));
      if (await stat(destination).catch(() => null)) continue;
      await mkdir(dirname(destination), { recursive: true });
      if (url.includes("/plugins/Basic/assets/placeholder")) {
        await writeFile(
          destination,
          '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>',
        );
        continue;
      }
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Failed to download ${url}: ${response.status}`);
      await writeFile(destination, Buffer.from(await response.arrayBuffer()));
      console.log(`Saved ${localPath}`);
    }
  }),
);
