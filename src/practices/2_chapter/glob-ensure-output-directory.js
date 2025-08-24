// Chapter 2: Systems Programming

/**
 * Section 2.6: How can we copy a set of files?
 * @example
 * copy-file-filtered.js
 */

import fs from 'fs'
import path from 'path'

const [srcRoot, dstRoot] = process.argv.slice(2)

fs.glob(`${srcRoot}/**/*.*`, {}, (err, files) => {
  if (err) {
    console.error(err)
  } else {
    for (const srcName of files) {
      const dstName = srcName.replace(srcRoot, dstRoot)
      const dstDir = path.dirName(dstName)

      fs.ensureDir(dstDir, (err) => {
        if (err) {
          console.error(err)
        }
      })
    }
  }
})