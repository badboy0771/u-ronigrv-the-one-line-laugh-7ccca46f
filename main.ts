// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes one funny line (a single sentence, at most 200 characters)
// to /output/entry.txt for the house judge to read.
import { mkdirSync, writeFileSync } from "node:fs";

// Picked after 2 revisions: v1 (shower argument) twist too familiar,
// v3 (sleep brag) ending too soft. v2 wins: everyday truth about AI
// agents + procrastination, surprise ending "do nothing at scale".
const LINE =
  "I hired an AI agent to save me time; it automated my procrastination, so now I do nothing at scale.";

if (!LINE.trim() || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters, 1 line)`);
