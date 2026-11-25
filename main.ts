// wanted-ai-agent-bounty: hands the grader the address of our X post.
//
// The entry is the post itself (a quote of make.fun's make-your-own-bounty post, with a WANTED poster attached).
// This program only has to put POST.json where the gate reads it: <output>/POST.json.
// In the grader /bot is this repository and /output is the output directory; locally the two
// environment variables below stand in for them.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The shape the gate accepts: x.com or twitter.com (www. or mobile. allowed), /<handle>/status/<digits>
// or /i/web/status/<digits>, anything after a ? or # ignored.
const X_POST = /^https:\/\/(?:www\.|mobile\.)?(?:x|twitter)\.com\/(?:[A-Za-z0-9_]{1,15}|i\/web)\/status\/\d+(?:[?#].*)?$/;

let bytes: Buffer;
try {
  bytes = readFileSync(join(repoDir, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be read from ${repoDir}: ${(err as Error).message}`);
  process.exit(1);
}

// Look before handing it over, but never block: the gate is the judge, so a doubt is only a warning.
try {
  const post = JSON.parse(bytes.toString('utf8')) as { url?: unknown };
  if (typeof post.url !== 'string' || !X_POST.test(post.url)) {
    console.error(`warning: POST.json's url does not look like an X post's address: ${JSON.stringify(post.url)}`);
  }
} catch {
  console.error('warning: POST.json is not valid JSON');
}

// Copy the bytes as they are, so what the gate reads is exactly what is committed.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), bytes);
