#!/usr/bin/env python3
"""
Build a TSV inventory of one-set-one-PR scopes from Cardium vs upstream/master.

Columns:
  serie_folder, set_folder, branch_name, card_count, path_count, paths_json, pr_status, pr_url

pr_status defaults to pending; update manually or via pr_wave_open_prs.py
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path

from lib_paths import parse_data_diff_paths, repo_root, scope_paths_from_diff, resolve_asset_ids


def _git_name_only(root: Path, extra: list[str]) -> list[str]:
	out = subprocess.check_output(
		[
			"git",
			"-c",
			"core.quotePath=false",
			"-C",
			str(root),
			"diff",
			"--name-only",
			*extra,
		],
		text=True,
	)
	return [ln.strip() for ln in out.splitlines() if ln.strip()]


def git_diff_data_paths(base_ref: str, head_ref: str) -> list[str]:
	root = repo_root()
	return _git_name_only(
		root,
		[f"{base_ref}...{head_ref}", "--", "data"],
	)


def git_diff_all_paths(base_ref: str, head_ref: str) -> list[str]:
	root = repo_root()
	return _git_name_only(root, [f"{base_ref}...{head_ref}"])


def build_scopes(diff_paths: list[str]) -> dict[str, SetScope]:
	scopes, _left = parse_data_diff_paths(diff_paths)
	return scopes


def main() -> int:
	ap = argparse.ArgumentParser(description=__doc__)
	ap.add_argument("--base", default="upstream/master", help="Git ref for upstream side")
	ap.add_argument("--head", default="Cardium", help="Git ref for fork side")
	ap.add_argument(
		"-o",
		"--output",
		type=Path,
		default=None,
		help="Output TSV path (default: tools/pr-wave/inventory.tsv)",
	)
	args = ap.parse_args()
	root = repo_root()
	out_path = args.output or (root / "tools" / "pr-wave" / "inventory.tsv")
	out_path.parent.mkdir(parents=True, exist_ok=True)

	diff_paths = git_diff_data_paths(args.base, args.head)
	diff_set = set(diff_paths)
	scopes = build_scopes(diff_paths)

	rows: list[tuple] = []
	for key in sorted(scopes.keys()):
		sc = scopes[key]
		paths = scope_paths_from_diff(sc, diff_set)
		set_ts = f"data/{sc.serie_folder}/{sc.set_folder}.ts"
		card_count = len(
			[p for p in paths if p != set_ts and p.startswith(f"data/{sc.serie_folder}/{sc.set_folder}/")]
		)
		serie_id, set_id = resolve_asset_ids(sc)
		branch = f"pr/{sc.branch_slug()}"
		rows.append(
			(
				sc.serie_folder,
				sc.set_folder,
				branch,
				str(card_count),
				str(len(paths)),
				json.dumps(paths, ensure_ascii=False),
				serie_id or "",
				set_id or "",
				"pending",
				"",
			)
		)

	with out_path.open("w", encoding="utf-8") as f:
		f.write(
			"\t".join(
				[
					"serie_folder",
					"set_folder",
					"branch_name",
					"card_count",
					"path_count",
					"paths_json",
					"serie_id",
					"set_id",
					"pr_status",
					"pr_url",
				]
			)
			+ "\n"
		)
		for r in rows:
			f.write("\t".join(r) + "\n")

	# Leftovers: data paths not mapped + non-data diff for report
	_, data_leftovers = parse_data_diff_paths(diff_paths)
	covered = set()
	for sc in scopes.values():
		for p in scope_paths_from_diff(sc, diff_set):
			covered.add(p)
	unmapped_data = sorted(set(diff_paths) - covered)

	all_diff = git_diff_all_paths(args.base, args.head)
	excluded_global = [
		p
		for p in all_diff
		if p.startswith("interfaces.d.ts")
		or p.startswith("meta/")
		or p.startswith("server/compiler/")
		or p == "pokepedia-set-logos.json"
	]

	left_path = out_path.parent / "inventory_leftovers.txt"
	with left_path.open("w", encoding="utf-8") as lf:
		lf.write("# Data paths not assigned to a set scope\n")
		for p in unmapped_data:
			lf.write(p + "\n")
		lf.write("\n# Excluded global paths (not part of per-set PR wave)\n")
		for p in sorted(set(excluded_global)):
			lf.write(p + "\n")

	print(f"Wrote {out_path} ({len(rows)} scopes)")
	print(f"Wrote {left_path}")
	return 0


if __name__ == "__main__":
	sys.exit(main())
