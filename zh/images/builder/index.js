const fs = require('fs')
const path = require('path')
const globby = require('globby');

const BUILDER_DIR = path.resolve(__dirname)

async function run() {
    const allSVGPath = await globby([
        '**/*.svg'
    ], {
        cwd: BUILDER_DIR,
        absolute: true
    })
    console.log(allSVGPath)
    allSVGPath.forEach(path => {
        const svg = fs.readFileSync(path, 'utf-8')
        const newSVG = svg.replace(/#293C54/ig, '#91cc75')
            .replace(/#C13531/ig, '#5470c6')
            .replace(/#C23531/ig, '#5470c6')
        fs.writeFileSync(path, newSVG, 'utf-8')
    })
    console.log('done')
}

run()