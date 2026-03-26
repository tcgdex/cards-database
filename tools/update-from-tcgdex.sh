#!/usr/bin/env sh
# Rebase-only updater: keep Cardium on top of upstream/master.
set -eu

ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

USE_STASH=0
DRY_RUN=0
STASHED=0
STASH_NAME=""

usage() {
	echo "Usage: tools/update-from-tcgdex.sh [--stash] [--dry-run]"
	echo
	echo "  --stash    Stash dirty worktree automatically before syncing"
	echo "  --dry-run  Print commands without changing git state"
}

while [ "$#" -gt 0 ]; do
	case "$1" in
		--stash)
			USE_STASH=1
			;;
		--dry-run)
			DRY_RUN=1
			;;
		-h|--help)
			usage
			exit 0
			;;
		*)
			echo "[x] Unknown option: $1" >&2
			usage >&2
			exit 1
			;;
	esac
	shift
done

run() {
	echo "+ $*"
	if [ "$DRY_RUN" -eq 0 ]; then
		"$@"
	fi
}

if ! git rev-parse --git-dir >/dev/null 2>&1; then
	echo "[x] Not inside a git repository" >&2
	exit 1
fi

if ! git rev-parse --verify Cardium >/dev/null 2>&1; then
	echo "[x] Local branch 'Cardium' does not exist" >&2
	exit 1
fi

if ! git remote get-url upstream >/dev/null 2>&1; then
	echo "[x] Remote 'upstream' is not configured" >&2
	exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
	echo "[x] Remote 'origin' is not configured" >&2
	exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
DIRTY_STATE="$(git status --porcelain)"

if [ -n "$DIRTY_STATE" ] && [ "$USE_STASH" -eq 0 ]; then
	if [ "$DRY_RUN" -eq 0 ]; then
		echo "[x] Working tree is dirty. Commit/stash first or run with --stash." >&2
		exit 1
	fi
	echo "[i] Dry-run: working tree is dirty; showing commands only."
fi

if [ -n "$DIRTY_STATE" ] && [ "$USE_STASH" -eq 1 ]; then
	STASH_NAME="pre-sync-$(date +%Y%m%d-%H%M%S)"
	if [ "$DRY_RUN" -eq 0 ]; then
		run git stash push -u -m "$STASH_NAME"
		STASHED=1
	else
		echo "+ git stash push -u -m $STASH_NAME"
	fi
fi

if [ "$CURRENT_BRANCH" != "Cardium" ]; then
	run git checkout Cardium
fi

TS="$(date +%Y%m%d-%H%M%S)"
TAG_NAME="backup/pre-sync-$TS"
BACKUP_BRANCH="backup/cardium-$TS"

run git tag "$TAG_NAME" Cardium
run git branch "$BACKUP_BRANCH" Cardium

run git fetch upstream master
run git log --oneline Cardium..upstream/master
run git rebase upstream/master

if [ "$DRY_RUN" -eq 0 ]; then
	CUSTOM_COUNT="$(git rev-list --count upstream/master..Cardium)"
	MERGE_COUNT="$(git log --merges --oneline upstream/master..Cardium | wc -l | tr -d ' ')"

	echo "[i] Custom commits on top of upstream/master: $CUSTOM_COUNT"
	if [ "$CUSTOM_COUNT" -gt 10 ]; then
		echo "[x] Custom commit count exceeds 10; compact history before push." >&2
		exit 1
	fi

	if [ "$MERGE_COUNT" -gt 0 ]; then
		echo "[x] Merge commits found on Cardium-only history." >&2
		git log --merges --oneline upstream/master..Cardium
		exit 1
	fi
fi

run git log --oneline --graph upstream/master..Cardium
run git log --oneline Cardium..upstream/master

if [ "$DRY_RUN" -eq 1 ]; then
	echo "[OK] Dry-run complete. No refs were changed."
else
	echo "[OK] Sync complete. Cardium remains rebased on upstream/master."
fi
echo "[i] No push performed."
echo "[i] To publish (after approval): git push origin Cardium --force-with-lease"

if [ "$STASHED" -eq 1 ]; then
	echo "[i] Worktree was stashed as '$STASH_NAME'. Re-apply manually if needed."
	echo "[i] Check with: git stash list"
fi
