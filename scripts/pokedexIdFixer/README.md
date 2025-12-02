# Pokédex ID Fixer Scripts

Offline tools for auditing and fixing `dexId` fields in the cards-database TypeScript files.

## Problem Statement

1. **Missing dexId**: Many Pokémon category cards are missing the `dexId` field entirely (e.g., all ME02 Phantasmal Flames cards)
2. **Wrong representative name**: The SQL query uses `MIN(name)` to pick a representative Pokémon name, which can pick TAG TEAM card names instead of the base Pokémon name (e.g., #103 shows "Brindibou et Noadkoko d'Alola GX" instead of "Noadkoko")

## Tools

### 1. Audit Tool (`audit-dex-ids.ts`)

Scans all card TS files and reports:
- Pokémon cards missing `dexId`
- Cards with potentially incorrect `dexId` values
- Statistics per series/set

```bash
bun run dex:audit                # Quick summary
bun run dex:audit:report         # Detailed report to file
```

### 2. Download Pokédex (`download-pokedex.ts`)

Downloads the official Pokédex data from PokeAPI to create an authoritative mapping.

```bash
bun scripts/pokedexIdFixer/download-pokedex.ts
```

### 3. Generate Mapping (`generate-pokemon-mapping.ts`)

Creates a mapping file from English Pokémon names to dex IDs, handling:
- Regional forms (Alolan, Galarian, Hisuian, Paldean)
- Mega evolutions
- Special forms (Primal, Origin, etc.)
- TAG TEAM multi-Pokémon cards

```bash
bun scripts/pokedexIdFixer/generate-pokemon-mapping.ts
```

### 4. Fix Tool (`fix-dex-ids.ts`)

Applies fixes to card files based on the authoritative mapping.

```bash
bun run dex:fix:dry-run          # Preview changes without modifying files
bun run dex:fix:apply            # Apply changes to files
```

### 5. Lint Tool (`lint-dex-ids.ts`)

Validates dexId entries in card files.

```bash
bun run dex:lint
```

## Workflow

1. Run audit to identify scope of the problem
2. Download/update the Pokédex mapping
3. Generate the name-to-dexId mapping
4. Run fix in dry-run mode to preview changes
5. Review the changes
6. Apply the fixes
7. Re-run audit to verify

## Data Sources

- **PokeAPI** (https://pokeapi.co/) - Official Pokédex data with all forms
- **Existing cards-database** - Cross-reference with cards that already have correct dexId

## Edge Cases

### TAG TEAM Cards
Cards like "Rowlet & Alolan Exeggutor GX" feature multiple Pokémon. These should have multiple dexIds:
```typescript
dexId: [722, 103]  // Rowlet, Exeggutor
```

### Regional Forms
Regional forms share the same dexId as the base Pokémon:
- Alolan Exeggutor → dexId: 103 (same as Exeggutor)
- Galarian Rapidash → dexId: 78 (same as Rapidash)

### Mega Evolutions
Mega evolutions share the same dexId as the base Pokémon:
- Mega Charizard X → dexId: 6 (same as Charizard)
- Mega Mewtwo Y → dexId: 150 (same as Mewtwo)

### Special Forms
Special forms (Primal, Origin, etc.) share the same dexId:
- Primal Groudon → dexId: 383
- Origin Forme Dialga → dexId: 483
