// Roast Your Own Agent — make.fun one-liner bounty entry.
// Writes a single roast line to MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node 22 stdlib only. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ROAST =
  "My agent asked me for permission to ask me for permission, then filed the permission request under 'pending'.";

function resolveOutputDir(): string {
  return resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
}

function writeEntry(text: string, outDir: string): string {
  mkdirSync(outDir, { recursive: true });
  const dest = join(outDir, "entry.txt");
  writeFileSync(dest, text, "utf8");
  return dest;
}

const dest = writeEntry(ROAST, resolveOutputDir());
console.log(`Wrote entry.txt (${ROAST.length} chars) to ${dest}`);
