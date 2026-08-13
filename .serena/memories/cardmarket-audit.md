# Cardmarket Audit Workflow

- Repository root: `C:\\0. Repos\\cards-database`; run commands from the repository root.
- Cardmarket tooling lives under `scripts/cardmarket/` and uses Bun directly. Preferred commands: `bun run cardmarket:audit`, `bun run cardmarket:test`, `bun run cardmarket:apply -- --set <set-id>`, and `bun run cardmarket:apply -- --all`.
- `--apply` requires `--set` or `--all`; the default audit is read-only. `--full` adds exhaustive candidate evidence.
- Staged apply collision checks ignore unrelated pre-existing duplicate IDs and only reject collisions involving IDs touched by the selected fixes. This allows partial cleanup batches while still protecting selected final IDs.
- Current decision: keep `cardmarket:apply` as a fresh full-audit-then-apply workflow. Use `--set` for smaller batches and `--all` for large batches; do not add report-driven apply unless audit runtime becomes a practical problem.
- Default generated artifacts are under ignored `var/audit-cardmarket/`: start with `summary.md` and `summary.json`, then inspect priority-ranked `sets/<set-id>.md/json`. `full-report.json` is opt-in. The old `var/audit-cardmarket-report.json` path is obsolete.
- The tool scans only `data/**/*.ts`; `data-asia` is a separate database and must remain excluded.
- No trusted/manual Cardmarket overrides are part of the current workflow.
- Missing links can be auto-proposed with a new top-level `thirdParty` object when the candidate confidence is `unique-candidate`, `rank`, or `score`; `group-position` suggestions remain manual review.
- A full audit is expensive on this dataset and can take several minutes; avoid launching duplicate runs. It downloads the live Cardmarket singles catalog.
- Every valid run clears `var/audit-cardmarket/` plus the known legacy report files before scanning. Progress output covers file loading, candidate groups, catalog matching, validation, and fix proposals with elapsed time and phase ETA; catalog download is indeterminate.
- If Bun is installed but `bun` is not recognized in an existing VS Code terminal, restart the terminal/editor or add `$HOME\\.bun\\bin` to the current session PATH. `npm run cardmarket:audit` depends on Bun being discoverable through PATH.
- The repository root `tsconfig.json` uses ESM + bundler resolution. Plain `ts-node` is unreliable for this standalone tool; do not replace the Bun command with a plain `ts-node` invocation without explicit CommonJS/Node overrides.
