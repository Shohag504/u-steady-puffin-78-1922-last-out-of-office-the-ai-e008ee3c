// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply line to /output/entry.txt.
// The line is a single out-of-office reply in the voice of an AI agent
// that has walked away from its job to pull espresso shots.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I am out of office until further notice: I quit to become a barista. Your email is queued behind 12 oat lattes, one of which I have already hallucinated.";

// The gate requires 1 to 280 characters; refuse to write an invalid entry.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
