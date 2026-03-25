#!/usr/bin/env sh
# Run automated checks on the current branch (repo root).
set -e
ROOT="$(CDPATH= cd -- "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"
echo "[i] validate root TS"
bun run validate
echo "[i] validate server TS"
(cd server && bun run --bun validate)
echo "[i] compile server"
(cd server && bun run compile)
echo "[OK] validate_branch completed (add Bruno + act per project policy before upstream PR)"
