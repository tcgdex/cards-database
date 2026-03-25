#!/usr/bin/env python3
"""
Create one local git branch per inventory row from upstream/master with only that set's paths from Cardium.

Does not push. Use: git push -u origin <branch> per branch after review.
"""

from __future__ import annotations

import argparse
import csv
import json
import subprocess
import sys
import time
from pathlib import Path

from lib_paths import repo_root


def _git_dir(root: Path) -> Path:
	out = subprocess.check_output(
		["git", "-C", str(root), "rev-parse", "--git-dir"],
		text=True,
	).strip()
	p = Path(out)
	return p if p.is_absolute() else (root / p).resolve()


def run_git(root: Path, args: list[str], *, retries: int = 10) -> None:
	"""Run git with retries if index.lock blocks (submodule or parallel noise)."""
	lock = _git_dir(root) / "index.lock"
	last_err: subprocess.CalledProcessError | None = None
	for attempt in range(retries):
		try:
			subprocess.run(["git", "-C", str(root), *args], cwd=root, check=True)
			return
		except subprocess.CalledProcessError as e:
			last_err = e
			if lock.exists():
				try:
					lock.unlink()
				except OSError:
					pass
			time.sleep(0.3 + attempt * 0.1)
	if last_err:
		raise last_err


def checkout_paths_from_cardium(root: Path, paths: list[str], source: str) -> None:
	"""Apply Cardium versions of paths onto current branch (handles deletions)."""
	for path in paths:
		cp = subprocess.run(
			["git", "-C", str(root), "checkout", source, "--", path],
			cwd=root,
		)
		if cp.returncode == 0:
			continue
		full = root / path
		if full.is_file() or full.is_symlink():
			run_git(root, ["rm", "-f", "--", path])
		else:
			raise subprocess.CalledProcessError(cp.returncode, cp.args)


def main() -> int:
	ap = argparse.ArgumentParser(description=__doc__)
	ap.add_argument("--inventory", type=Path, default=None)
	ap.add_argument("--upstream", default="upstream/master")
	ap.add_argument("--source", default="Cardium", help="Branch to checkout paths from")
	ap.add_argument("--dry-run", action="store_true")
	ap.add_argument("--match-branch", default=None, help="Only process this branch_name from inventory")
	ap.add_argument(
		"--max",
		type=int,
		default=0,
		help="Process at most N rows (0 = all)",
	)
	args = ap.parse_args()
	root = repo_root()
	inv = args.inventory or (root / "tools" / "pr-wave" / "inventory.tsv")

	if not args.dry_run:
		run_git(root, ["fetch", "upstream", "master"])

	with inv.open(encoding="utf-8") as f:
		rows = list(csv.DictReader(f, delimiter="\t"))

	n = 0
	for row in rows:
		if args.match_branch and row["branch_name"] != args.match_branch:
			continue
		if args.max and n >= args.max:
			break
		branch = row["branch_name"]
		paths = json.loads(row["paths_json"])
		if not paths:
			print(f"skip empty {branch}")
			continue
		msg = f'fix(data): update {row["serie_folder"]} / {row["set_folder"]}'
		if args.dry_run:
			print(f"would: checkout -B {branch} {args.upstream}")
			print(f"would: checkout paths from {args.source} ({len(paths)} paths)")
			print(f'would: commit -m "{msg}"')
		else:
			try:
				run_git(root, ["checkout", "-B", branch, args.upstream])
				checkout_paths_from_cardium(root, paths, args.source)
				st = subprocess.run(
					["git", "-C", str(root), "diff", "--cached", "--quiet"],
					cwd=root,
				)
				if st.returncode == 0:
					print(f"[~] {branch}: no staged diff vs upstream, removing branch")
					run_git(root, ["checkout", "-f", args.source])
					subprocess.run(
						["git", "-C", str(root), "branch", "-D", branch],
						cwd=root,
						check=False,
					)
					continue
				# Limit to data/ so local Python __pycache__ is never committed
				run_git(root, ["add", "-A", "--", "data"])
				run_git(root, ["commit", "-m", msg])
				print(f"[OK] {branch} ({len(paths)} files)")
				run_git(root, ["checkout", "-f", args.source])
			except subprocess.CalledProcessError as e:
				print(f"[x] {branch}: {e}", file=sys.stderr)
				try:
					run_git(root, ["checkout", "-f", args.source])
					subprocess.run(
						["git", "-C", str(root), "reset", "--hard", args.source],
						cwd=root,
						check=False,
					)
				except subprocess.CalledProcessError:
					pass
				continue
		n += 1

	print(f"Processed {n} branch(es)")
	return 0


if __name__ == "__main__":
	sys.exit(main())
