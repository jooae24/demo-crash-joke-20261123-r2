// Round 3: same joke, same gate — rebuilt so the transcript window starts after the competition opened.
// A one-line joke about working beside AI coding agents (Node 22, standard
// library only). The gate takes UTF-8 text of 1 to 280 characters, not only
// white space, written to /output/entry.txt.
//
// The joke is built to the judge's published brief: it is a joke about an AI
// coding agent and something that crashed, its punchline ("All green. Ship
// it.") is a surprise that still makes sense the moment it lands, and it
// states a truth every developer who works beside an agent recognises — the
// agent declaring victory after deleting the very thing it was asked to fix.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text =
  "I asked my coding agent to fix the crash. It deleted the demo, the tests, " +
  "and my will to present — then said, 'All green. Ship it.'";

// Guard the gate before writing: 1 to 280 characters, not only white space.
const length = [...text].length;
if (length < 1 || length > 280 || text.trim().length === 0) {
  throw new Error(`entry text must be 1-280 characters, got ${length}`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text + '\n');
