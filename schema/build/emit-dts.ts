import { writeFileSync, mkdirSync } from 'node:fs'
import { compile } from 'json-schema-to-typescript'
import { Card } from '../src/card.js'
import { Set, Serie } from '../src/set.js'
import { CardResume, SetResume, SerieResume, Variants } from '../src/resume.js'

// TypeBox schemas ARE JSON Schema, so we hand them straight to json-schema-to-typescript.
const schemas: Array<[string, object]> = [
  ['Variants', Variants], ['CardResume', CardResume], ['SetResume', SetResume],
  ['SerieResume', SerieResume], ['Card', Card], ['Set', Set], ['Serie', Serie],
]

const parts: string[] = []
for (const [name, schema] of schemas) {
  const ts = await compile(schema as never, name, {
    additionalProperties: false, // keep the .d.ts clean; runtime stays permissive (see validate)
    bannerComment: '',
  })
  parts.push(ts.trim())
}

mkdirSync('dist', { recursive: true })
writeFileSync('dist/types.d.ts', parts.join('\n\n') + '\n')
console.log('→ dist/types.d.ts')