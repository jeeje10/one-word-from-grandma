// One Word From Grandma — make.fun entry.
// Writes exactly one word (1–30 characters) to /output/entry.txt: the
// word my grandma would text about AI. "skynet" — she has seen the
// Terminator films, she does not trust the robot, and one word says it
// all.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "skynet";

// Gate guard: exactly one word, 1–30 characters, no whitespace inside.
if (!/^[A-Za-z]{1,30}$/.test(entry)) {
  throw new Error(`entry ${JSON.stringify(entry)} is not one word of 1-30 letters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
