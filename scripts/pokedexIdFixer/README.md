# Pokédex ID Maintenance Tools

Tools for maintaining `dexId` fields in the TCGdex cards-database. These scripts help contributors audit, validate, and fix Pokédex ID entries across all card files.

## Quick Start

```bash
# Check for missing or incorrect dexIds
bun run dex:audit

# Validate existing dexId entries
bun run dex:lint

# Preview fixes (no changes made)
bun run dex:fix:dry-run

# Apply fixes
bun run dex:fix:apply
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dex:audit` | Quick summary of missing dexIds |
| `bun run dex:audit:report` | Detailed report saved to file |
| `bun run dex:fix:dry-run` | Preview changes without modifying files |
| `bun run dex:fix:apply` | Apply fixes to card files |
| `bun run dex:lint` | Validate dexId entries |

## Contributing Workflow

When adding or fixing `dexId` values:

1. **Audit** - Run `bun run dex:audit` to identify cards needing attention
2. **Fix** - Run `bun run dex:fix:dry-run` to preview proposed changes
3. **Review** - Check the output to ensure fixes are correct
4. **Apply** - Run `bun run dex:fix:apply` to update files
5. **Validate** - Run `bun run dex:lint` to verify all entries
6. **Test** - Run `bun run validate` to ensure TypeScript compiles

## Tool Details

### Audit Tool (`audit-dex-ids.ts`)

Scans all card files and reports:
- Pokémon cards missing `dexId`
- Cards with potentially incorrect values
- Statistics grouped by series/set

### Fix Tool (`fix-dex-ids.ts`)

Automatically adds or corrects `dexId` values based on:
- Official PokeAPI data
- Manual mappings for edge cases
- Existing correct entries in the database

### Lint Tool (`lint-dex-ids.ts`)

Validates that:
- All Pokémon cards have a `dexId`
- Values are within valid range (1-1025+)
- Multi-Pokémon cards have correct array length

### Supporting Tools

| Tool | Purpose |
|------|---------|
| `download-pokedex.ts` | Fetch official data from PokeAPI |
| `generate-pokemon-mapping.ts` | Create name-to-dexId mapping |
| `dex-utils.ts` | Shared utility functions |
| `manual-mappings.json` | Override mappings for special cases |

## dexId Guidelines

### Standard Cards
Each Pokémon card should have a `dexId` array with the National Pokédex number:

```typescript
dexId: [25]  // Pikachu
```

### Multi-Pokémon Cards
TAG TEAM and similar cards list all featured Pokémon:

```typescript
dexId: [722, 103]  // Rowlet & Alolan Exeggutor GX
```

### Forms and Variants
All forms share the base Pokémon's dexId:

| Form Type | Example | dexId |
|-----------|---------|-------|
| Regional | Alolan Exeggutor | 103 |
| Mega | Mega Charizard X | 6 |
| Primal | Primal Groudon | 383 |
| Origin | Origin Forme Dialga | 483 |

## Data Sources

- [PokeAPI](https://pokeapi.co/) - Official Pokédex data
- Existing cards-database entries for cross-reference

## Troubleshooting

**Script fails to find cards:**
Ensure you're running from the repository root directory.

**Incorrect mapping:**
Add an override in `manual-mappings.json` for edge cases.

**TypeScript errors after fixes:**
Run `bun run validate` to check for syntax issues.
