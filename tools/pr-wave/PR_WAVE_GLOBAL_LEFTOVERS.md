# PR wave: paths excluded from per-set upstream PRs

## Wave status (set-level PRs)

- **138** upstream PRs opened against `tcgdex/cards-database` (PR **#1185** through **#1322**).
- Index: `tools/pr-wave/opened_prs_index.tsv` (`branch_name`, `pr_number`, `url`).
- Card image documentation comments were posted via `prepare_pr_comments.py` + `post_pr_comments.py` (chunked per PR). Re-run the same commands after rebases if blob links need refreshing.

---

This file complements `tools/pr-wave/inventory_leftovers.txt` after running:

```bash
python3 tools/pr_wave/inventory.py
```

## Serie-level data file (not a set folder)

- `data/McDonald's Collection.ts` — McDonald's **serie** definition (`id: mc`). It is not `data/<Serie>/<Set>/…` and is not auto-bucketed into a single set PR. Options:
  - open a small dedicated PR that only touches this file once McDonald's card PRs are merged, or
  - cherry-pick it into the first McDonald's set PR if maintainers agree.

## Global / infrastructure paths (explicitly out of scope for this wave)

These differ on `Cardium` vs `upstream/master` but are **not** split into per-set card PRs:

- `interfaces.d.ts`
- `meta/**` (definitions, translations, schema)
- `server/compiler/**`
- `pokepedia-set-logos.json`

Handle them in separate focused PRs to upstream (schema/compiler/metadata) after the card-data wave.

## Manual review checklist (per set PR)

Before opening each upstream PR:

1. TypeScript card files are well formed and match neighbouring cards in the same set.
2. Translations read naturally and match the card (no obvious truncation or wrong language).
3. Attack, effect, and Energy cost text still names energy types where required (Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Dragon, Fairy, Colorless).
4. Names, rarity, local numbering, and damage strings remain consistent with the physical card intent.

## Automated checks

Run on each PR branch (minimum):

```bash
./tools/pr_wave/validate_branch.sh
```

Also run Bruno API tests and `act` per repository policy before marking the PR ready.
