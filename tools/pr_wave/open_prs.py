#!/usr/bin/env python3
"""
Push each local pr/* branch to origin and open a PR against tcgdex/cards-database master.

Requires: gh CLI, git remote origin -> your fork, upstream -> tcgdex/cards-database.

Writes tools/pr-wave/opened_prs.tsv (append) with branch, pr_number, url.
"""

from __future__ import annotations

import argparse
import csv
import re
import subprocess
import sys
import tempfile
import time
from pathlib import Path

from lib_paths import load_branch_filter, repo_root


def gh_user_login() -> str:
	return (
		subprocess.check_output(["gh", "api", "user", "-q", ".login"], text=True).strip()
	)


def main() -> int:
	ap = argparse.ArgumentParser(description=__doc__)
	ap.add_argument("--inventory", type=Path, default=None)
	ap.add_argument("--repo", default="tcgdex/cards-database")
	ap.add_argument("--dry-run", action="store_true")
	ap.add_argument("--match-branch", default=None)
	ap.add_argument(
		"--branches-file",
		type=Path,
		default=None,
		help="Only process branch names listed one per line (e.g. tools/pr-wave/wave1_branches.txt)",
	)
	ap.add_argument("--max", type=int, default=0, help="Max PRs to open (0 = all pending)")
	args = ap.parse_args()
	allow = load_branch_filter(args.branches_file)
	root = repo_root()
	inv = args.inventory or (root / "tools" / "pr-wave" / "inventory.tsv")
	out = root / "tools" / "pr-wave" / "opened_prs.tsv"
	login = gh_user_login()

	with inv.open(encoding="utf-8") as f:
		rows = list(csv.DictReader(f, delimiter="\t"))

	opened: set[str] = set()
	if out.is_file():
		with out.open(encoding="utf-8") as of:
			r2 = csv.DictReader(of, delimiter="\t")
			for r in r2:
				opened.add(r.get("branch_name", ""))

	n = 0
	for row in rows:
		branch = row["branch_name"]
		if args.match_branch and branch != args.match_branch:
			continue
		if allow is not None and branch not in allow:
			continue
		if row.get("pr_url"):
			continue
		if branch in opened:
			continue
		if args.max and n >= args.max:
			break
		title = f'fix(data): {row["set_folder"]} ({row["serie_folder"]})'
		body = "\n".join(
			[
				f"Set: **{row['set_folder']}**",
				f"Series folder: `{row['serie_folder']}`",
				f"Changed card files: **{row['card_count']}**",
				"",
				"### Validation",
				"- [ ] `bun run validate`",
				"- [ ] `cd server && bun run --bun validate`",
				"- [ ] `cd server && bun run compile`",
				"- [ ] Manual review: translations, energy types, TS syntax",
				"",
				"### Card images",
				"See follow-up comments with embedded TCGdex assets.",
			]
		)

		if args.dry_run:
			print(f"would push: {branch}")
			print(f"would gh pr create: {title}")
			n += 1
			continue

		try:
			push = subprocess.run(
				["git", "-C", str(root), "push", "-u", "origin", branch],
				check=False,
			)
			if push.returncode != 0:
				subprocess.run(
					[
						"git",
						"-C",
						str(root),
						"push",
						"-u",
						"origin",
						branch,
						"--force-with-lease",
					],
					check=True,
				)
			with tempfile.NamedTemporaryFile(
				mode="w",
				suffix=".md",
				delete=False,
				encoding="utf-8",
			) as tf:
				tf.write(body)
				body_path = tf.name
			try:
				cp = subprocess.run(
					[
						"gh",
						"pr",
						"create",
						"--repo",
						args.repo,
						"--head",
						f"{login}:{branch}",
						"--base",
						"master",
						"--title",
						title,
						"--body-file",
						body_path,
					],
					cwd=root,
					check=True,
					text=True,
					capture_output=True,
				)
			finally:
				Path(body_path).unlink(missing_ok=True)
			url = (cp.stdout or "").strip()
			mnum = re.search(r"/pull/(\d+)", url)
			num = mnum.group(1) if mnum else ""
			with out.open("a", encoding="utf-8") as of:
				if out.stat().st_size == 0:
					of.write("branch_name\tpr_number\turl\n")
				of.write(f"{branch}\t{num}\t{url}\n")
			print(f"[OK] {branch} -> {url}")
			n += 1
			time.sleep(0.25)
		except subprocess.CalledProcessError as e:
			print(f"[x] {branch}: {e}", file=sys.stderr)
			time.sleep(2.0)
			continue

	print(f"Opened or dry-run {n} PR(s)")
	return 0


if __name__ == "__main__":
	sys.exit(main())
