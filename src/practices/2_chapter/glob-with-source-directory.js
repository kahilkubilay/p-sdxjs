// Chapter 2: Systems Programming

/**
 * Section 2.4: How can we select a set of files?
 * @example
 * copy-file-filtered.js
 */

import {glob} from 'fs'

const srcDir = process.argv[2]

glob(`${srcDir}/**/*.*`, { ignore: '.bck' }, (err, files) => {
  if (err) {
    console.error(err)
  } else {
    for (const filename of files) {
      console.log(filename)
    }
  }
})
