#!/usr/bin/env sh
# Push every local pr/* branch and open a GitHub PR against tcgdex/cards-database.
# Requires: gh auth, origin -> fork, upstream -> tcgdex/cards-database.
set -e
REPO_ROOT="$(CDPATH= cd -- "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"
python3 tools/pr_wave/open_prs.py "$@"
