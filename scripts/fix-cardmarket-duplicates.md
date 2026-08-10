# Fix Cardmarket Duplicate IDs

[`fix-cardmarket-duplicates.ts`](./fix-cardmarket-duplicates.ts) repairs the duplicate Cardmarket `idProduct` values listed in [issue #1936](https://github.com/tcgdex/cards-database/issues/1936).

It is both a migration tool and an audit tool. Without `--apply`, it fetches the current issue and Cardmarket singles catalog, resolves the affected cards, and writes a report to `var/cardmarket-duplicates-report.json`. With `--apply`, it applies only after every issue row has a resolved target.

## Usage

Run from the repository root after installing dependencies:

```bash
npm install
npm run fix-cardmarket-duplicates
```

The default command is a dry run. Review `var/cardmarket-duplicates-report.json`; it is ignored by Git because it is generated from live sources.

Apply the resolved changes with:

```bash
npm run fix-cardmarket-duplicates -- --apply
```

The script refuses to apply if any row is `ambiguous`, `missing-product`, or `missing-file`.

## How It Works

1. It scans `data/**/*.ts` and identifies set files from their `id` and `cardCount` fields.
2. It follows each card file's `Set` import and extracts the card and set objects with the repository's `extractFile` helper.
3. It downloads issue #1936 and parses each duplicate-ID table row into an `idProduct` and card-code list.
4. It downloads Cardmarket's `products_singles_6.json` catalog.
5. It creates candidates using the set's Cardmarket expansion, the normalized English card name, and English ability/attack names.
6. For cards with the same Cardmarket name, it groups matching cards by signature and assigns the ordered Cardmarket product records to the ordered local collector numbers.
7. It uses explicit manual overrides for cases where Cardmarket has duplicate records, special collector codes, stale local values, or variant-specific products.
8. It writes the report and, when requested, replaces only the affected Cardmarket fields.

The report includes the current IDs, issue-reported ID, resolved ID, candidate products, product ranks, scores, and matched card details. It is the primary review artifact before applying changes.

## Resolution Logic

The resolver does not assume that a TCGdex card name or a TCGdex set ID is a Cardmarket product key. Those values are only the starting point for narrowing the search.

### Different IDs Have Different Roles

- The TCGdex set ID, such as `sm5`, identifies the local set and is used to build card codes such as `sm5-157`.
- `set.thirdParty.cardmarket`, such as `2065`, is Cardmarket's expansion ID. This is the value used to filter `products_singles_6.json` by `product.idExpansion`.
- `product.idProduct` is the value that is ultimately written into a card file.
- `product.idMetacard` identifies a Cardmarket card concept, but it is not unique enough to use as the final product ID. Several product records can share an `idMetacard`.

For example, several Ultra Prism Leafeon GX records have the same product name and metacard, but represent different collector-number positions. The resolver must select the correct `idProduct`, not merely a matching name, expansion, or metacard.

### Candidate Construction

For each local card, the script builds candidates in the following order:

1. **Expansion filter.** Keep only catalog products whose `idExpansion` equals the local set's Cardmarket expansion ID. The issue's duplicated ID is not used as a trusted product selector because it is the value being repaired.
2. **Product-name split.** Cardmarket names are split into a base name and optional bracketed details. For example:

	```text
	Leafeon GX [Breath of the Leaves | Solar Beam | Grand Bloom GX]
	```

	becomes the base name `Leafeon GX` and three details.

3. **Card-name normalization.** Names are lowercased, apostrophes are removed, `&` is normalized to `and`, and punctuation is converted to spaces. The card's English name is also combined with its suffix when needed, so `Deoxys` plus `ex` can match `Deoxys ex`.
4. **Name compatibility.** A product receives a name score when the normalized names are equal or one is a name-prefix of the other. This deliberately allows suffix and catalog naming differences, but it is not enough to resolve same-name cards.
5. **Ability and attack matching.** The script collects English ability names followed by English attack names from the local card. Each expected detail is compared with Cardmarket's bracketed details using normalized exact or prefix matching. This distinguishes cards such as two Mewtwo EX cards that have the same name but different attacks.

### Candidate Scores

The score is a review and fallback signal, not a product ID:

| Match | Points |
| --- | ---: |
| Exact normalized card/product base name | 100 |
| Product base starts with the card name | 90 |
| Card name starts with the product base | 80 |
| Each matching ability or attack detail | 100 |
| All expected details matched | 250 bonus |

Therefore, an exact name with all details receives at least `350` points, plus the detail points. Candidates are sorted by descending score and then ascending `idProduct`. A unique high-scoring candidate can resolve a card when no stronger assignment exists. Tied candidates remain ambiguous instead of being guessed.

Cards without bracketed details, especially same-name Trainer cards, cannot be safely resolved by this score alone. Those cases need product-order evidence or a manual assignment.

### Group Assignment

The main disambiguation step works across cards rather than independently:

1. Cards with the same Cardmarket expansion, normalized name, and sorted ability/attack signature are placed in one group.
2. The local cards in the group are sorted by `collectorSortKey`. Numeric collector numbers sort first; codes such as `157a` and prefixed codes such as `RC29` have deterministic secondary ordering.
3. All exact-detail candidate products in the group are deduplicated and sorted by ascending `idProduct`.
4. The candidates are assigned positionally to the local cards.

This handles repeated Cardmarket product blocks. For example, if the catalog contains three Leafeon GX products with identical names and details, the local cards at the corresponding collector-number positions receive the first, second, and third product IDs rather than all receiving the first ID.

This is a catalog-order heuristic: the Cardmarket singles catalog does not expose a TCGdex collector-number field in the downloaded product objects. Product order generally follows the set listing order, but it can contain code cards, alternate product blocks, or special cards. That is why the script reports the product rank and retains manual overrides for exceptions.

### Fallback And Precedence

For each issue row, the effective precedence is:

1. `manualAssignments[cardCode]`, if present.
2. A group assignment from matching card signatures.
3. A unique product whose rank within the Cardmarket expansion equals a numeric local collector number.
4. A unique candidate score meeting the fallback threshold.
5. `ambiguous` or `missing-product` if none of the above is safe.

The issue's old `reportedId` is used as an audit baseline and, by default, as the old value to replace during application. It is not evidence that the product is correct. `currentIds` records what the local file contains so stale issue data can be handled without blindly replacing a number that is no longer present.

The manual maps run at different stages:

- `manualAssignments` changes the resolved target selected by the report.
- `manualReplacements` changes the exact old-to-new text replacement used by `--apply`.
- `manualVariantAssignments` rewrites all Cardmarket occurrences in a specific file in source order, which is necessary when normal and holo variants need different products.

This separation is important: selecting a correct target for a card does not by itself identify which occurrence in a multi-variant file should be changed.

## Manual Maps

The manual maps are intentionally separate because choosing the correct target and changing the source text are different operations.

### `manualAssignments`

`manualAssignments` maps a TCGdex card code to its final Cardmarket product ID:

```ts
"xyp-XY147": 291587
```

It overrides automatic candidate selection for one card. Use it when the automatic resolver cannot distinguish a product, when the issue snapshot is stale, or when the correct product is in a special product block.

### `manualReplacements`

`manualReplacements` maps the old value in a specific file to the new value:

```ts
"ex13-103": { 277081: 277073 }
```

This is needed because the issue's reported ID may no longer be present, or because a file contains variant-level IDs. It tells the apply step exactly which existing number to replace. It prevents a global replacement of an old ID from changing unrelated cards.

### `manualVariantAssignments`

`manualVariantAssignments` provides the final IDs in source order for every `cardmarket` occurrence in a file:

```ts
"2021swsh-21": [538978, 538983]
```

This is for files with multiple variants, such as normal and holo. The order must match the order of the `cardmarket` fields in that card file. It should be used sparingly because it depends on that ordering.

## Reuse And Scope

The script is reusable as an **idempotent audit and migration runner for issue #1936**:

- Running the dry run repeatedly refreshes the report from the current live issue and catalog.
- Running `--apply` again does not intentionally reapply already-correct values.
- It can detect drift if a later data change reintroduces one of the issue's duplicate assignments.

It is not a generic duplicate-ID fixer. The issue URL, card-code parser, manual maps, special product assumptions, and candidate ordering are tied to issue #1936. To use the approach for another issue:

1. Change the issue source and confirm its table format.
2. Rebuild and review the manual assignments for the new affected cards.
3. Run a dry run and inspect every non-resolved row.
4. Add or update replacement and variant maps only after checking the live catalog and local card variants.
5. Apply only when the report is fully resolved, then run `npm run validate` and a duplicate audit.

The live Cardmarket catalog can change over time. A successful historical run is therefore not a permanent guarantee that the same automatic candidates will be selected later; the report and manual maps provide the review trail for this migration.

## Validation

After applying changes:

```bash
npm run validate
git diff --check
```

The issue-scoped acceptance checks are:

- every issue card has a resolved target;
- no Cardmarket ID is shared by two affected card files, including their variants;
- unrelated fields such as `tcgplayer`, attacks, and variant metadata are unchanged.