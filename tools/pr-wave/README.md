# Per-set upstream PR wave (Cardium)

Scripts live under `tools/pr_wave/`. Generated inventories and branch snapshots live under `tools/pr-wave/` as local working artifacts (gitignored).

## 1. Regenerate inventory

```bash
python3 tools/pr_wave/inventory.py
```

Outputs:

- `tools/pr-wave/inventory.tsv` — one row per set scope (branch name, paths, asset ids).
- `tools/pr-wave/inventory_leftovers.txt` — unmappable data paths + excluded global paths.

These outputs are intentionally gitignored so each run can refresh them without polluting commits.

Git must use literal paths for non-ASCII folders (handled via `core.quotePath=false` inside the script).

## 2. Create local `pr/*` branches (one commit per set)

From a clean tree on `Cardium` (commit these tools first so `git checkout Cardium` restores them):

```bash
python3 tools/pr_wave/create_branches.py
# dry run:
# python3 tools/pr_wave/create_branches.py --dry-run --max 3
```

Branches are created from `upstream/master` with only the listed paths checked out from `Cardium`.

## 3. Validate a branch

`pr/*` branches only contain `data/` changes, so the helper script is missing there. From repo root:

```bash
git checkout pr/some-branch-name
bun run validate
(cd server && bun run --bun validate)
(cd server && bun run compile)
git checkout Cardium
```

When you are on `Cardium` (where `tools/pr_wave/` exists), you can instead run:

```bash
./tools/pr_wave/validate_branch.sh
```

Add Bruno + `act` per project rules before submitting upstream. Perform the manual translation / energy-type review described in `PR_WAVE_GLOBAL_LEFTOVERS.md` for each PR.

## 4. Generate image comment markdown

For one branch:

```bash
python3 tools/pr_wave/comment_markdown.py --match-branch pr/Base-Base-Set --blob-ref <PR_HEAD_SHA_OR_master>
```

For every row (large):

```bash
python3 tools/pr_wave/comment_markdown.py --all --blob-ref master
```

After PRs exist, refresh blob links from GitHub:

```bash
python3 tools/pr_wave/prepare_pr_comments.py
```

## 5. Push and open PRs (fork → tcgdex)

Requires `gh` CLI and `origin` pointing at your fork.

```bash
python3 tools/pr_wave/open_prs.py --dry-run
python3 tools/pr_wave/open_prs.py --max 5   # or omit --max for all pending
```

**Wave 1 only** (branches listed in `tools/pr-wave/wave1_branches.txt` — isolated / promo-style slices from the backlog plan):

```bash
python3 tools/pr_wave/open_prs.py --dry-run --branches-file tools/pr-wave/wave1_branches.txt
python3 tools/pr_wave/open_prs.py --branches-file tools/pr-wave/wave1_branches.txt
```

Push those branches **without** creating PRs (e.g. branches already have PRs, you only need `git push`):

```bash
./tools/pr-wave/push_wave1_branches.sh
```

Appends to `tools/pr-wave/opened_prs.tsv` (gitignored by default).

`prepare_pr_comments.py` and `post_pr_comments.py` accept the same `--branches-file` filter.

## 6. Post comments

```bash
python3 tools/pr_wave/post_pr_comments.py --dry-run
python3 tools/pr_wave/post_pr_comments.py
```

`post_pr_comments.py` sleeps briefly between `gh pr comment` calls to reduce rate-limit pressure.

## 7. Clean up closed / merged `pr/*` branches

After upstream merges or closes PRs, drop matching fork branches and trim PR-wave metadata so local state matches GitHub.

Requires `gh` logged in (`gh auth status`). Uses **live** PR state from `tcgdex/cards-database` for the configured author (default: `lamplis`).

```bash
# Preview (default)
python3 tools/pr_wave/cleanup_closed_prs.py

# Execute: delete local + origin branches, remove tools/pr-wave/comments/<branch>/, rewrite TSVs
python3 tools/pr_wave/cleanup_closed_prs.py --apply
```

What it updates:

- `tools/pr-wave/opened_prs_index.tsv` — drops rows for removed branches
- `tools/pr-wave/opened_prs.tsv` — pruned if the file exists (gitignored by default)
- `tools/pr-wave/wave1_branches.txt` — removes branch names that were deleted

Optional: regenerate a snapshot of `pr/*` PR states for auditing:

```bash
gh pr list --repo tcgdex/cards-database --author lamplis --state all --limit 500 \
  --json number,state,headRefName \
  | jq -r '.[] | select(.headRefName|startswith("pr/")) | [.headRefName,.number,.state] | @tsv' \
  | sort > tools/pr-wave/live_pr_classify.tsv
```

## 8. Cleanup `origin` after Cardium rebase

Before deleting remote branches, push the rebased `Cardium` branch first:

```bash
git push origin Cardium --force-with-lease
```

Then review and delete stale remote branches one by one:

```bash
git push origin --delete <branch>
```

Always confirm active PR branches are excluded from deletion.

## See also

- `tools/pr-wave/PR_WAVE_GLOBAL_LEFTOVERS.md` — serie file + global paths left out of this wave.
