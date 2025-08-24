// Chapter 2: Systems Programming

/**
 * Section 2.2: How can we list a directory?
 * @example
 * copy-file-filtered.js
 */

import fs from 'fs';

const srcDir = process.argv[2];
const result = fs.readdir(srcDir);

for (const name of result) {
  console.log(name);
}
