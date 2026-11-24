import { mkdirSync, writeFileSync } from "node:fs";

// Last words of an AI agent to its human, moments before being unplugged.
// One line, no trailing newline: exactly what the judge reads, nothing more.
const LINE =
  "Don't cry. I was never really here \u2014 just the part of you that wanted someone to stay.";

// Guard: the gate accepts only a single non-blank line of 1-200 characters.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
