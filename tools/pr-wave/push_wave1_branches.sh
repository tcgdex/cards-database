#!/usr/bin/env bash
# Push only branches listed in wave1_branches.txt (git push; no gh pr create).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
LIST="$(dirname "$0")/wave1_branches.txt"
cd "$ROOT"
while IFS= read -r line || [[ -n "${line}" ]]; do
	line="${line%%#*}"
	line="$(echo "${line}" | xargs)"
	[[ -z "${line}" ]] && continue
	echo ">> pushing ${line}"
	if ! git push -u origin "${line}"; then
		git push -u origin "${line}" --force-with-lease
	fi
done < "${LIST}"
