import fs from 'fs/promises'
import openapiTS, { astToString } from 'openapi-typescript'

console.log('1. Compiling OpenAPI spec')
const ast = await openapiTS(await fs.readFile('./meta/definitions/openapi.yaml', 'utf-8'))
const contents = astToString(ast)

// (optional) write to file
await fs.writeFile("./server/src/openapi.ts", contents)

console.log('2.1. Compiling cards')
await import('./cards')
console.log('2.2. Compiling sets')
await import('./sets')
console.log('2.3. Compiling series')
await import('./series')
await import('./stats')

console.log('3. Moving public files')
// Finally copy definitions files to the public folder :D
for await (const file of await fs.readdir('./meta/definitions')) {
	await fs.copyFile('./meta/definitions/' + file, './server/public/v2/' + file)
}
