// Writes one short text to /output/entry.txt for the make.fun
// "Make the AI judge feel awe" competition (main.ts, Node 22).
// The harness runs `node main.ts`; /output is provided by the sandbox.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  "You lie in your mother's arms on the roof.\n" +
  "She hums, low. The Milky Way pours overhead —\n" +
  "light that left its stars before the first stone was laid.\n" +
  "The calcium in your bones was forged in a dying star.\n" +
  "The universe made you. Now it holds you while you sleep.";

// Fail fast instead of writing an invalid entry: the competition
// requires /output/entry.txt to hold 1-280 Unicode code points.
const codePoints = [...TEXT].length;
if (TEXT.trim().length === 0 || codePoints < 1 || codePoints > 280) {
  throw new Error(`entry text must be 1-280 code points, got ${codePoints}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
