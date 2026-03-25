#!/usr/bin/env python3
"""
Post generated image markdown as GitHub PR comments (one file per gh pr comment).

Reads tools/pr-wave/opened_prs.tsv and tools/pr-wave/inventory.tsv.
"""

from __future__ import annotations

import argparse
import csv
import re
import subprocess
import sys
import time
from pathlib import Path

from lib_paths import load_branch_filter, repo_root


def main() -> int:
	ap = argparse.ArgumentParser(description=__doc__)
	ap.add_argument("--repo", default="tcgdex/cards-database")
	ap.add_argument("--opened", type=Path, default=None)
	ap.add_argument("--comments-dir", type=Path, default=None)
	ap.add_argument("--dry-run", action="store_true")
	ap.add_argument("--max-prs", type=int, default=0)
	ap.add_argument(
		"--branches-file",
		type=Path,
		default=None,
		help="Only post for branches listed one per line (e.g. tools/pr-wave/wave1_branches.txt)",
	)
	args = ap.parse_args()
	allow = load_branch_filter(args.branches_file)
	root = repo_root()
	opened = args.opened or (root / "tools" / "pr-wave" / "opened_prs.tsv")
	cdir = args.comments_dir or (root / "tools" / "pr-wave" / "comments")

	if not opened.is_file():
		print("No opened_prs.tsv; run open_prs.py first", file=sys.stderr)
		return 1

	with opened.open(encoding="utf-8") as f:
		pr_rows = list(csv.DictReader(f, delimiter="\t"))

	n = 0
	for pr in pr_rows:
		if args.max_prs and n >= args.max_prs:
			break
		branch = pr["branch_name"]
		if allow is not None and branch not in allow:
			continue
		url = pr.get("url", "").strip()
		if not url:
			continue
		pr_arg = pr.get("pr_number", "").strip()
		if not pr_arg:
			m = re.search(r"/pull/(\d+)", url)
			pr_arg = m.group(1) if m else url
		bfolder = cdir / branch.replace("/", "_")
		if not bfolder.is_dir():
			print(f"[~] skip {branch}: no {bfolder}")
			continue
		files = sorted(bfolder.glob("comment-*.md"))
		for md in files:
			body = md.read_text(encoding="utf-8")
			if args.dry_run:
				print(f"would comment #{pr_arg} <- {md.name} ({len(body)} bytes)")
				continue
			subprocess.run(
				["gh", "pr", "comment", pr_arg, "--repo", args.repo, "--body-file", str(md)],
				cwd=root,
				check=True,
			)
			print(f"[OK] commented #{pr_arg} {md.name}")
			time.sleep(0.35)
		n += 1

	return 0


if __name__ == "__main__":
	sys.exit(main())
