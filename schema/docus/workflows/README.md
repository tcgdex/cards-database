# Example workflows

These YAML files illustrate the **Stage 2b** rollout described in the RFC —
they are not wired up in this PR and are not run by GitHub. Their location
under `docus/` (rather than `.github/workflows/`) ensures GitHub ignores them.

Two workflows form the full loop:

| File | Repo | Trigger | Purpose |
|------|------|---------|---------|
| `publish-and-notify.yml` | `tcgdex/cards-database` | `push` on `schema-v*` tag | Publish `@tcgdex/schema` to npm, upload `openapi.json` as release asset, dispatch to all SDK repos |
| `sdk-regenerate.yml` | Each SDK repo (`sdk-python`, `sdk-java`, …) | `repository_dispatch: schema-released` | Download `openapi.json`, run `openapi-generator-cli`, open a PR with regenerated models |

## Data flow

    schema-v1.2.0 pushed
             │
             ▼
     publish-and-notify.yml (cards-database)
        ├── npm publish @tcgdex/schema
        ├── upload openapi.json to GH release
        └── repository_dispatch → { sdk-python, sdk-java, sdk-kotlin, sdk-swift }
                                          │
                                          ▼
                              sdk-regenerate.yml (per SDK repo)
                                 ├── download openapi.json
                                 ├── openapi-generator-cli generate
                                 └── open PR (regen/schema-v1.2.0)

## What's needed before wiring these up

1. `@tcgdex/schema` published to npm (Stage 2a in the RFC).
2. Per-SDK Mustache template overrides for `x-extensible-enum` handling
   (see [`../python-template-sketch.mustache`](../python-template-sketch.mustache) —
   a design sketch; currently not runnable, see the header note in the file).
3. `SDK_DISPATCH_TOKEN` PAT provisioned in `tcgdex/cards-database` secrets.

The JS SDK doesn't use this loop — it consumes `@tcgdex/schema` directly via
`implements` (see `sdk-migration.md`).