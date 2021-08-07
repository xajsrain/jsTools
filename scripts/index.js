const fse = require('fs-extra')
const path = require('path')

const OriginDir = path.resolve(__dirname, '../demo')
const TargetDir = path.resolve(__dirname, '../lib/')
console.log('i am raincool branch');
const rReadPath = (file) => {
  fse.readdir(file, (err, data) => {
    if (!data) return
    data.forEach(item => {
      const pathname = path.join(file, item);
      if (fse.statSync(path.join(pathname)).isDirectory()) {
        rReadPath(pathname)
      } else {
        if (item.search(/.base.[js|css|png|jpg]/) > 0) {
          fse.copy(pathname, path.join(TargetDir, item.replace('.base', ''))).then(res => {
            console.log(`\x1B[36m /test/: \x1B[33m ${item} \x1B[36m => /lib/ OK! `);
          })
        }
      }
    })
  })
}
// rReadPath(OriginDir)