#!/usr/bin/env python3
"""
Remove fork `pr/*` branches whose upstream PRs are CLOSED or MERGED, and trim PR-wave metadata.

Requires a logged-in `gh` CLI. Uses live GitHub state (not local guesses).

Default mode is dry-run; pass --apply to delete local + remote branches, remove comment
artifacts, and rewrite index files.
"""

from __future__ import annotations

import argparse
import csv
import json
import shutil
import subprocess
import sys
from pathlib import Path

from lib_paths import load_branch_filter, repo_root


def _gh_pr_list_json(repo: str, author: str, limit: int) -> list[dict]:
	out = subprocess.check_output(
		[
			"gh",
			"pr",
			"list",
			"--repo",
			repo,
			"--author",
			author,
			"--state",
			"all",
			"--limit",
			str(limit),
			"--json",
			"number,state,headRefName",
		],
		text=True,
	)
	return json.loads(out)


def _branch_comment_dir(root: Path, branch_name: str) -> Path:
	safe = branch_name.replace("/", "_")
	return root / "tools" / "pr-wave" / "comments" / safe


def _run_git(args: list[str], cwd: Path) -> subprocess.CompletedProcess:
	return subprocess.run(["git", *args], cwd=str(cwd), capture_output=True, text=True)


def _rewrite_tsv_keep_rows(path: Path, keep: set[str], key_field: str) -> None:
	if not path.is_file():
		return
	with path.open(encoding="utf-8", newline="") as f:
		reader = csv.DictReader(f, delimiter="\t")
		fieldnames = reader.fieldnames or []
		rows = list(reader)
	kept = [r for r in rows if r.get(key_field, "").strip() in keep]
	with path.open("w", encoding="utf-8", newline="") as f:
		w = csv.DictWriter(f, fieldnames=fieldnames, delimiter="\t", extrasaction="ignore")
		w.writeheader()
		w.writerows(kept)


def _rewrite_wave1_branches(path: Path, remove: set[str]) -> None:
	if not path.is_file():
		return
	lines_out: list[str] = []
	for line in path.read_text(encoding="utf-8").splitlines():
		stripped = line.split("#", 1)[0].strip()
		if stripped and stripped in remove:
			continue
		lines_out.append(line)
	path.write_text("\n".join(lines_out) + "\n", encoding="utf-8")


def main() -> int:
	ap = argparse.ArgumentParser(description=__doc__)
	ap.add_argument("--repo", default="tcgdex/cards-database", help="Upstream repo (PR target)")
	ap.add_argument("--author", default="lamplis", help="Fork PR author login")
	ap.add_argument("--limit", type=int, default=500, help="Max PRs to fetch from gh")
	ap.add_argument(
		"--index",
		type=Path,
		default=None,
		help="TSV branch_name -> pr_number (default: tools/pr-wave/opened_prs_index.tsv)",
	)
	ap.add_argument(
		"--opened",
		type=Path,
		default=None,
		help="Optional opened_prs.tsv (gitignored); pruned if present",
	)
	ap.add_argument(
		"--branches-file",
		type=Path,
		default=None,
		help="Optional wave1_branches.txt style filter: only consider these branch names",
	)
	ap.add_argument("--apply", action="store_true", help="Perform deletions (default: dry-run only)")
	args = ap.parse_args()

	root = repo_root()
	index_path = args.index or (root / "tools" / "pr-wave" / "opened_prs_index.tsv")
	opened_path = args.opened or (root / "tools" / "pr-wave" / "opened_prs.tsv")
	wave1_path = root / "tools" / "pr-wave" / "wave1_branches.txt"
	allow = load_branch_filter(args.branches_file)

	if not index_path.is_file():
		print(f"[x] missing index: {index_path}", file=sys.stderr)
		return 1

	prs = _gh_pr_list_json(args.repo, args.author, args.limit)
	by_number = {int(p["number"]): p["state"] for p in prs}

	with index_path.open(encoding="utf-8") as f:
		index_rows = list(csv.DictReader(f, delimiter="\t"))

	to_remove: list[tuple[str, int]] = []
	for row in index_rows:
		branch = row.get("branch_name", "").strip()
		if not branch.startswith("pr/"):
			continue
		if allow is not None and branch not in allow:
			continue
		num_s = row.get("pr_number", "").strip()
		if not num_s.isdigit():
			print(f"[~] skip {branch}: bad pr_number {num_s!r}")
			continue
		num = int(num_s)
		state = by_number.get(num)
		if state is None:
			print(f"[?] {branch} PR#{num}: not found in gh list (author/limit?) — skip")
			continue
		if state in ("CLOSED", "MERGED"):
			to_remove.append((branch, num))
		else:
			print(f"[i] keep OPEN {branch} PR#{num}")

	if not to_remove:
		print("[OK] nothing to remove (no CLOSED/MERGED rows matched)")
		return 0

	remove_branches = {b for b, _ in to_remove}
	prefix = "[dry-run]" if not args.apply else "[apply]"
	for branch, num in sorted(to_remove, key=lambda x: x[0]):
		print(f"{prefix} {branch} PR#{num} -> remove local/remote + artifacts")

	if not args.apply:
		print("\n[i] Re-run with --apply to execute.")
		return 0

	for branch, num in to_remove:
		r = _run_git(["branch", "-D", branch], root)
		if r.returncode != 0 and "error" in (r.stderr or "").lower():
			print(f"[~] local branch {branch}: {r.stderr.strip() or r.stdout.strip()}")

		r = _run_git(["push", "origin", "--delete", branch], root)
		if r.returncode != 0:
			msg = (r.stderr or r.stdout or "").strip()
			if "remote ref does not exist" in msg.lower() or "unable to delete" in msg.lower():
				print(f"[~] remote missing {branch}")
			else:
				print(f"[!] git push --delete {branch}: {msg}")

		cdir = _branch_comment_dir(root, branch)
		if cdir.is_dir():
			shutil.rmtree(cdir)
			print(f"[OK] removed {cdir.relative_to(root)}")

	keep_branches = {
		r["branch_name"].strip()
		for r in index_rows
		if r.get("branch_name", "").strip() and r["branch_name"].strip() not in remove_branches
	}

	_rewrite_tsv_keep_rows(index_path, keep_branches, "branch_name")
	print(f"[OK] rewrote {index_path.relative_to(root)} ({len(keep_branches)} branch row(s) left)")

	_rewrite_tsv_keep_rows(opened_path, keep_branches, "branch_name")
	if opened_path.is_file():
		print(f"[OK] rewrote {opened_path.relative_to(root)}")

	_rewrite_wave1_branches(wave1_path, remove_branches)
	print(f"[OK] pruned {wave1_path.relative_to(root)}")

	print("[OK] cleanup apply finished")
	return 0


if __name__ == "__main__":
	sys.exit(main())
