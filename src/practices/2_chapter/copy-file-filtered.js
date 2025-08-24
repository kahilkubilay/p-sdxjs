// Chapter 2: Systems Programming

/**
 * Section 2.6: How can we copy a set of files?
 * @example
 * copy-file-filtered.js
 */

import {glob, stat} from 'fs'
import path from 'path'
import fs from 'fs-extra'

const [srcRoot, dstRoot] = process.argv.slice(2)

// console.log(srcRoot, dstRoot)

glob(`${srcRoot}/**/*.*`, { ignore: '*.bck' }, (err, files) => {
  if (err) {
    console.error(err)
  } else {
    for (const srcName of files) {
      stat(srcName, (err, stats) => {
        if (err) {
          console.error(err)
        } else if(stats.isFile()) {
          const dstName = srcName.replace(srcRoot, dstRoot)
          const dstDir = path.dirname(dstName)

          fs.ensureDir(dstDir, (err) => {
            if (err) {
              console.error(err)
            } else {
              fs.copy(srcName, dstDir, (err) => {
                if (err) {
                  console.error(err)
                } else {
                  console.log(`success`)
                }
              })
            }
          })
        }
      })
    }
  }
})