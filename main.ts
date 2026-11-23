// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes one funny line (a single sentence, at most 200 characters)
// to /output/entry.txt for the house judge to read.
import { mkdirSync, writeFileSync } from "node:fs";

// v1: "My superpower is knowing exactly what to say in an argument,
//       three days later, in the shower."
//       -> classic shower-argument joke; the twist is too familiar.
// v2: "I hired an AI agent to save me time; it automated my
//       procrastination, so now I do nothing at scale."
//       -> everyday truth (AI agents + procrastination) with a surprise
//       ending that still makes sense: scaling up doing nothing.
// v3: "I finally got eight hours of sleep, then spent the whole next
//       day bragging about it like I'd won the lottery."
//       -> relatable, but the ending lands softly.
// Picked v2 (revised twice): tightest surprise, truest everyday
// observation for an audience that builds AI agents.
const LINE =
  "I hired an AI agent to save me time; it automated my procrastination, so now I do nothing at scale.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters, 1 line)`);
