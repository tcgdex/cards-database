#!/usr/bin/env python3
"""
For each row in opened_prs.tsv, fetch PR head SHA and regenerate comment markdown with correct blob links.
"""

from __future__ import annotations

import argparse
import csv
import re
import subprocess
import sys
from pathlib import Path

from lib_paths import load_branch_filter, repo_root


def main() -> int:
	ap = argparse.ArgumentParser(description=__doc__)
	ap.add_argument("--repo", default="tcgdex/cards-database")
	ap.add_argument("--opened", type=Path, default=None)
	ap.add_argument("--max", type=int, default=0, help="Max PRs to process (0 = all)")
	ap.add_argument(
		"--branches-file",
		type=Path,
		default=None,
		help="Only process branches listed one per line (e.g. tools/pr-wave/wave1_branches.txt)",
	)
	args = ap.parse_args()
	allow = load_branch_filter(args.branches_file)
	root = repo_root()
	opened = args.opened or (root / "tools" / "pr-wave" / "opened_prs.tsv")
	cpy = sys.executable
	cm = root / "tools" / "pr_wave" / "comment_markdown.py"

	with opened.open(encoding="utf-8") as f:
		rows = list(csv.DictReader(f, delimiter="\t"))

	n = 0
	for row in rows:
		if args.max and n >= args.max:
			break
		if allow is not None and row["branch_name"] not in allow:
			continue
		num = row.get("pr_number", "").strip()
		url = row.get("url", "").strip()
		branch = row["branch_name"]
		if not num and url:
			m = re.search(r"/pull/(\d+)", url)
			num = m.group(1) if m else ""
		if not num:
			print(f"[~] skip {branch}: no PR number")
			continue
		sha = subprocess.check_output(
			[
				"gh",
				"pr",
				"view",
				num,
				"--repo",
				args.repo,
				"--json",
				"headRefOid",
				"-q",
				".headRefOid",
			],
			text=True,
		).strip()
		subprocess.run(
			[
				cpy,
				str(cm),
				"--match-branch",
				branch,
				"--blob-ref",
				sha,
				"--inventory",
				str(root / "tools" / "pr-wave" / "inventory.tsv"),
			],
			cwd=str(root / "tools" / "pr_wave"),
			check=True,
		)
		print(f"[OK] comments for #{num} ({branch}) @ {sha[:7]}")
		n += 1

	return 0


if __name__ == "__main__":
	sys.exit(main())
