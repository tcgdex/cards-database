import openapiTS, { astToString } from 'openapi-typescript'
import fs from 'fs/promises'

console.log(' . Compiling OpenAPI spec')
const ast = await openapiTS(await fs.readFile('./meta/definitions/openapi.yaml', 'utf-8'))
const contents = astToString(ast)

// (optional) write to file
await fs.writeFile("./server/src/openapi.ts", contents)

await import('./cards')
await import('./sets')
await import('./series')
