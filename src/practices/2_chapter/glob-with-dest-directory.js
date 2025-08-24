// Chapter 2: Systems Programming

/**
 * Section 2.6: How can we copy a set of files?
 * @example
 * copy-file-filtered.js
 */

import {glob} from 'fs';

const [srcDir, dstDir] = process.argv.slice(2)

glob(`${srcDir}/**/*.*`, { ignore: '.bck' }, (err, files) => {
  if (err) {
    console.error(err)
  } else {
    for (const srcName of files) {
      const dstName = srcName.replace(srcDir, dstDir)
      console.log(srcName, dstName)
    }
  }
})