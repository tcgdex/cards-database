# Audit Cardmarket Links

[`index.ts`](./index.ts) audits Cardmarket product links for every card in the `data` dataset. It reports duplicate assignments, validates existing links against the current Cardmarket singles catalog, and creates conservative algorithmic fix proposals.

The tool has no issue-specific input and has no trusted manual overrides. The duplicate assignments from issue #1936 are included automatically because the affected product IDs are found by the global duplicate scan.

## Prerequisites

The repository uses [Bun](https://bun.sh) for maintenance scripts, CI, and Docker builds. Install Bun before running these commands, then install the repository dependencies from the root:

```bash
bun install
```

Check the runtime with:

```bash
bun --version
```

## Usage

Run a global dry run from the repository root:

```bash
bun run cardmarket:audit
```

The default report is written to `var/audit-cardmarket/`. Start with `summary.md`, then open the highest-priority files under `sets/`. The report is generated from the live catalog and should be reviewed before applying changes.

Generate the exhaustive JSON evidence only when needed for deeper investigation:

```bash
bun run cardmarket:audit -- --full
```

This adds `var/audit-cardmarket/full-report.json`. The default run intentionally omits candidate arrays from valid, same-card variant-reuse, and unverifiable rows.

Apply safe fixes for one set:

```bash
bun run cardmarket:apply -- --set xy5
```

Apply several sets in one batch:

```bash
bun run cardmarket:apply -- --set xy5 --set xyp
```

Apply all safe fixes:

```bash
bun run cardmarket:apply -- --all
```

Run the local network-free regression tests:

```bash
bun run cardmarket:test
```

The `--` after the npm/Bun script name forwards arguments to the audit script. `--apply` is supplied by `cardmarket:apply`; it still requires `--set <set-id>` or `--all`. An unscoped apply is rejected. The `--set` value is the local TCGdex set ID, such as `xy5`, `xyp`, or `swsh1`.

Every run performs the complete global audit. The set options only control which already-generated, safe fix proposals may be written.

At startup, the tool removes the previous `var/audit-cardmarket/` output and known legacy Cardmarket report files before scanning or downloading anything. This prevents a failed or interrupted run from being mistaken for current output.

## Progress Reporting

The audit prints progress messages while it runs. Known phases show a count, percentage, elapsed time, and an estimated remaining time after enough work has completed:

- Loading set definitions.
- Loading card files.
- Resolving candidate groups.
- Matching cards to catalog products.
- Validating Cardmarket references.
- Generating fix proposals.

The catalog download reports as an indeterminate network step because the remote endpoint does not expose download progress. The full global matching phase can take several minutes; do not start a second audit while one is running.

## Module Layout

- `index.ts`: CLI argument parsing and orchestration for audit/apply modes.
- `types.ts`: shared domain and report types.
- `config.ts`: repository paths, catalog URL, and report location.
- `catalog.ts`: catalog download, product filtering, expansion ranks, and product-name parsing.
- `cards.ts`: set/card discovery and extraction from `data`.
- `references.ts`: TypeScript AST reference discovery and exact source edits.
- `matching.ts`: card-name/detail matching, candidate scoring, and group assignment.
- `audit.ts`: link validation, duplicate classification, and proposal generation.
- `fixes.ts`: scope checks, collision prevention, and source-file application.
- `report.ts`: compact summaries, set detail reports, optional full evidence, and output.

Generated reports stay in ignored `var/audit-cardmarket/`; they are not stored beside these source modules.

## Scope And Safety

Only `data/**/*.ts` is scanned. `data-asia` is a separate database and is intentionally excluded.

The default mode never changes card files. It:

1. Finds set files and card files under `data`.
2. Follows each card file's `Set` import and extracts the card and set objects.
3. Uses the TypeScript AST to locate every numeric `cardmarket` property, including top-level links and links inside detailed variants.
4. Downloads and indexes Cardmarket's `products_singles_6.json` catalog by `idProduct`.
5. Validates each existing link against the catalog and the local set/card data.
6. Builds a global inverse index from each Cardmarket product ID to all local references.
7. Generates algorithmic replacement or missing-link proposals where the evidence is sufficient.
8. Writes a compact summary and detail reports grouped by set.

No values from issue #1936 or from the previous `manualAssignments`, `manualReplacements`, or `manualVariantAssignments` maps are used. If the catalog does not provide enough evidence, the proposal remains in the report for review instead of being guessed.

A set-scoped apply is checked against the complete database before writing:

- A replacement must not leave the proposed product ID assigned to different card files.
- A duplicate group spanning multiple sets is treated as one unit. All of its sets must be selected before any proposal in that group can be applied.
- Existing references outside the selected sets remain part of the collision check.
- Pre-existing duplicate IDs do not block a staged batch merely because one of their owners is being moved. The collision check only fails when a newly assigned proposed ID would belong to different card files after the batch.
- Edits target the exact AST reference occurrence, so unrelated Cardmarket fields and variant IDs are not globally replaced.
- Missing links with a unique candidate, unique collector-rank match, or unique high-score match can receive a new top-level `thirdParty` object through an AST-targeted insertion. Group-position suggestions are not sufficient for this; variant-level missing links are not invented.

After each batch, run the global dry run again and review the new report before committing the batch.

## Candidate Resolution

Cardmarket product names are split into a base name and optional bracketed details. For example:

```text
Leafeon GX [Breath of the Leaves | Solar Beam | Grand Bloom GX]
```

The card's English name is also combined with its suffix when necessary, so a card named `Deoxys` with suffix `ex` can match `Deoxys ex`.

Candidates are limited to the Cardmarket expansion stored on the local set. Names and details are normalized by lowercasing, removing apostrophes, converting `&` to `and`, and replacing punctuation with spaces.

The score is evidence for review and fallback selection:

| Evidence | Points |
| --- | ---: |
| Exact normalized base-name match | 100 |
| Product base name starts with the card name | 90 |
| Card name starts with the product base name | 80 |
| Each matching ability or attack detail | 100 |
| All expected details are matched | 250 bonus |

A candidate is considered in this order:

1. For cards sharing an expansion, normalized name, and detail signature, exact-detail candidates are assigned by deterministic collector-number order and ascending Cardmarket product ID. This handles repeated Cardmarket product blocks without trusting the current duplicate value.
2. A unique candidate whose catalog rank within the expansion matches a numeric local collector number is selected.
3. A unique highest-scoring candidate with a score of at least `350` is selected.
4. A unique exact candidate can be selected when the candidate set itself contains only one product.
5. Otherwise the proposal is ambiguous.

The group-position rule is a catalog-order heuristic. It is useful for repeated product blocks, but it is recorded as a separate confidence level in the report. The catalog does not provide a TCGdex collector-number field, so special product blocks can still require manual review outside this script.

## Link Classifications

Every card file with an existing link gets a row in `links`. A card without any Cardmarket reference also gets a row so missing coverage is visible.

The `status` is the primary classification. Detailed validation problems remain in `reasons` when more than one condition applies.

| Status | Meaning |
| --- | --- |
| `valid` | The product exists, belongs to the set expansion, and its name and available ability/attack details match the local card. |
| `same-card-variant-reuse` | One product ID is used more than once in the same card file. This may be intentional when Cardmarket does not distinguish local variants; it is reported but not automatically changed. |
| `duplicate-cross-card` | One product ID is used by different card files. This is the primary duplicate error and is eligible for candidate resolution. |
| `catalog-missing` | The local product ID is absent from the downloaded Cardmarket catalog. |
| `expansion-mismatch` | The product exists, but its `idExpansion` differs from the local set's Cardmarket expansion. |
| `name-mismatch` | The product exists in the expected expansion, but its normalized base name does not match the local English card name. |
| `details-mismatch` | The product name matches, but one or more local ability or attack names are not present in the product's bracketed details. |
| `missing-link` | The card has a Cardmarket set expansion but no local Cardmarket product reference. |
| `unverifiable` | There is not enough local metadata to validate the link, normally because the set has no Cardmarket expansion. |

Duplicate classifications take precedence over the ordinary validation status. For example, a duplicated product with a name mismatch is reported as `duplicate-cross-card`, while `name-mismatch` remains in `reasons`.

A repeated ID within one card file is deliberately not treated as a cross-card duplicate. This distinction prevents normal/reverse/holo reuse from being confused with assigning one Cardmarket product to two different cards.

## Fix Classifications

The `fixes` section contains proposals for suspicious links and missing links. It does not contain entries for ordinary valid links.

| Status | Meaning |
| --- | --- |
| `proposed` | A deterministic candidate and an exact source edit were found. |
| `ambiguous` | Multiple candidates remain, the suggestion would keep the current duplicate, or the reference contains multiple variants whose product occurrence cannot be inferred safely. |
| `blocked-by-collision` | Applying the proposed ID together with the other global proposals would still assign that ID to different card files. |
| `blocked-by-scope` | The proposal belongs to a duplicate group spanning sets that were not all selected for the current `--set` batch. |

Fix confidence is recorded as `rank`, `score`, `unique-candidate`, or `group-position`. A proposal is never based on the existing local ID being trusted as evidence.

When a card has no existing top-level `thirdParty` object, only `unique-candidate`, `rank`, and `score` proposals can add one. `group-position` remains manual review because repeated Cardmarket catalog records do not expose enough information to prove which product belongs to the card.

## Report Structure

The default output contains:

- `summary.md`: the primary human-readable overview with headline metrics, status counts, fix plan, and priority-ranked sets.
- `summary.json`: compact machine-readable summary data.
- `sets/<set-id>.md`: actionable duplicate, validation, missing-link, and fix details for a set needing attention.
- `sets/<set-id>.json`: machine-readable set detail with candidate evidence for actionable findings.

Use `--full` to additionally write `full-report.json`, containing exhaustive link rows and all candidate evidence. The in-memory audit still performs the complete global scan in every mode; only serialization is filtered.

The summary uses these headline sections:

- **Headline**: overall result, action rows, cross-card duplicates, catalog failures, missing links, safe proposals, and manual review.
- **Link Status**: mutually exclusive status counts.
- **Fix Plan**: counts by fix status, confidence, and replacement/addition kind.
- **Sets Needing Attention**: priority-ranked set links; clean or informational-only sets are omitted from the table.

Reference locations identify the source occurrence, for example `thirdParty.cardmarket` or `variants[0].thirdParty.cardmarket`. This makes multi-variant files reviewable without relying on source-order replacement maps.

## Validation

After implementing or applying a batch:

```bash
bun run validate
bun run cardmarket:test
bun run cardmarket:audit
git diff --check
```

A clean audit has no `duplicate-cross-card` groups and no confidently invalid links. `same-card-variant-reuse`, `unverifiable`, and genuinely missing Cardmarket products may remain and should be assessed according to the catalog and the intended local variant model.
