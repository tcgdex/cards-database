import { TypeCompiler } from '@sinclair/typebox/compiler'
import { Card } from '../src/card.js'

const C = TypeCompiler.Compile(Card)
const [lang, id] = ['en', 'base1-4'] // Charizard, Base Set — stable
const url = `https://api.tcgdex.net/v2/${lang}/cards/${id}`

const res = await fetch(url)
if (!res.ok) { console.error(`fetch failed: ${res.status} ${url}`); process.exit(1) }
const data = await res.json() as Record<string, unknown>

if (C.Check(data)) {
  console.log(`✓ live ${id} validates against Card`)
  // Show the drift: fields the server actually returns that the schema (and the SDK type) omit.
  const known = new Set(Object.keys((Card as { properties: object }).properties))
  const extra = Object.keys(data).filter((k) => !known.has(k))
  if (extra.length) console.log(`  note: response also has un-modeled fields: ${extra.join(', ')}`)
} else {
  console.log(`✗ ${id} mismatches (each one is a real finding, not a demo bug):`)
  for (const e of C.Errors(data)) console.log(`  ${e.path}: ${e.message}`)
  process.exit(1)
}