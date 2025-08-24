// Chapter 2: Systems Programming

/**
 * Section 2.4: How can we select a set of files?
 * @example
 * copy-file-filtered.js
 */

import {glob} from 'fs'

glob('**/*.*', (err, files) => {
  if (err) {
    console.error(err)
  } else {
    files = files.filter(f => !f.endsWith('.bck'))

    for (const filename of files) {
      console.log(filename)
    }
  }
})
