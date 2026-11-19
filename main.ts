// news-image-20261118 entry: copies the front-page image into /output.
// The image is a static file in this repository; the program only moves it
// to the place the grader reads. Node 22, standard library only.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const IMAGE = "entry.png";

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  const src = join(BOT_DIR, IMAGE);
  const dst = join(OUTPUT_DIR, IMAGE);
  copyFileSync(src, dst);
} catch (err) {
  console.error(`could not copy ${IMAGE}: ${(err as Error).message}`);
  process.exit(1);
}
