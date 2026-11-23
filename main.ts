// SPDX-License-Identifier: MIT
// Exactly one letter for make.fun's One Letter for Your Day bounty: W, for a whirlwind of a day.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "W";

const MAX_CHARS = 1;

function entryLine(): string {
  const line = LINE.trim();
  if (line.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`entry line is ${line.length} characters, over the ${MAX_CHARS} limit`);
  }
  if (!/^[A-Z]$/.test(line)) {
    throw new Error("entry must be exactly one letter A-Z");
  }
  return line;
}

function main(): void {
  const line = entryLine();
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
  console.log(`wrote ${line.length} characters to /output/entry.txt`);
}

main();
