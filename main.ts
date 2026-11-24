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
  // No control characters and no accidental double spaces: either would
  // break the one-letter rendering the judge sees.
  if (/[\u0000-\u001F\u007F]/.test(line)) {
    throw new Error("entry must not contain control characters");
  }
  if (/  /.test(line)) {
    throw new Error("entry must not contain double spaces");
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
