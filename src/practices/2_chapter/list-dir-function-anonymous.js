// Chapter 2: Systems Programming

/**
 * Section 2.4: What are anonymous function?
 * @example
 * copy-file-filtered.js
 */

import fs from 'fs';

const srcDir = process.argv[2];

fs.readdir(srcDir, (err, files) => {
  if (err) {
    console.error(err);
  } else {
    for (const name of files) {
      console.log(name);
    }
  }
});
