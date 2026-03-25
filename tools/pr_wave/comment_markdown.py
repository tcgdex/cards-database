#!/usr/bin/env python3
"""
Generate GitHub PR comment markdown with embedded TCGdex card images (high.webp).

Reads tools/pr-wave/inventory.tsv and emits one or more .md chunks to stay under GitHub size limits.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from pathlib import Path

from lib_paths import repo_root

# Match TCGdexBOT-style language grid from prior PRs
LANGS = [
	("en", "English (en)"),
	("fr", "French (fr)"),
	("es", "Spanish (es)"),
	("es-mx", "Spanish (Mexico) (es-mx)"),
	("it", "Italian (it)"),
	("pt", "Portuguese (pt)"),
	("pt-br", "Portuguese (Brazil) (pt-br)"),
	("pt-pt", "Portuguese (Portugal) (pt-pt)"),
	("de", "German (de)"),
	("nl", "Dutch (nl)"),
	("pl", "Polish (pl)"),
	("ru", "Russian (ru)"),
]

_EN_NAME = re.compile(r'"en"\s*:\s*"((?:\\.|[^"\\])*)"')


def decode_ts_string(s: str) -> str:
	return s.replace("\\\\", "\\").replace('\\"', '"')


def read_en_name(card_path: Path) -> str:
	text = card_path.read_text(encoding="utf-8", errors="replace")
	m = _EN_NAME.search(text)
	if m:
		return decode_ts_string(m.group(1))
	return card_path.stem


def card_id_for_asset(basename: str) -> str:
	"""Filename without .ts -> CDN path segment (e.g. 1 -> 001 when numeric)."""
	stem = basename
	if stem.isdigit():
		return f"{int(stem):03d}"
	return stem


def github_blob_url(ref: str, rel_path: str) -> str:
	from urllib.parse import quote

	p = quote(rel_path.replace("\\", "/"), safe="/%")
	return f"https://github.com/tcgdex/cards-database/blob/{ref}/{p}"


def card_block(
	card_rel: str,
	serie_id: str,
	set_id: str,
	card_stem: str,
	en_name: str,
	blob_ref: str,
) -> str:
	ckey = card_id_for_asset(card_stem)
	full_id = f"{set_id}-{ckey}".replace("--", "-")
	lines = [
		f'<details><summary><strong>{en_name}</strong> ({full_id})</summary>',
		"",
		'<div align="center">',
		"",
		"| Language | Language | Language |",
		"|:-------:|:-------:|:-------:|",
	]
	cells: list[str] = []
	for code, label in LANGS:
		url = f"https://assets.tcgdex.net/{code}/{serie_id}/{set_id}/{ckey}/high.webp"
		img = f'<img src="{url}" alt="{en_name} ({label})" width="200"/>'
		cell = f"<strong>{label}</strong><br>{img}"
		cells.append(cell)
	# 3 columns
	for i in range(0, len(cells), 3):
		row_cells = cells[i : i + 3]
		while len(row_cells) < 3:
			row_cells.append("")
		lines.append("| " + " | ".join(row_cells) + " |")
	lines.extend(
		[
			"",
			"</div>",
			"",
			f"**File:** [{card_rel}]({github_blob_url(blob_ref, card_rel)})",
			"",
			"</details>",
			"",
		]
	)
	return "\n".join(lines)


def emit_scope_comment(
	serie_folder: str,
	set_folder: str,
	paths_json: str,
	serie_id: str,
	set_id: str,
	blob_ref: str,
	max_bytes: int,
) -> list[str]:
	if not serie_id or not set_id:
		return [
			f"<!-- Missing serie_id/set_id for {serie_folder}/{set_folder}; fill Ascended Heroes.ts-style ids. -->\n"
		]
	paths: list[str] = json.loads(paths_json)
	root = repo_root()
	set_ts = f"data/{serie_folder}/{set_folder}.ts"
	card_paths = [p for p in paths if p != set_ts and p.endswith(".ts")]
	chunks: list[str] = []
	buf: list[str] = []
	buf.append(f"## {len(card_paths)} cards (images)\n")
	current = "\n".join(buf)
	for cp in sorted(card_paths):
		stem = Path(cp).stem
		p = root / cp
		en_name = read_en_name(p) if p.is_file() else stem
		block = card_block(cp, serie_id, set_id, stem, en_name, blob_ref)
		if len(current) + len(block) + 2 > max_bytes and len(buf) > 1:
			chunks.append("\n".join(buf))
			buf = [f"## (continued)\n"]
		buf.append(block)
		current = "\n".join(buf)
	if len(buf) > 1 or (len(buf) == 1 and buf[0].startswith("##")):
		chunks.append("\n".join(buf))
	return chunks if chunks else ["_No card files in scope._\n"]


def main() -> int:
	ap = argparse.ArgumentParser(description=__doc__)
	ap.add_argument("--inventory", type=Path, default=None, help="Path to inventory.tsv")
	ap.add_argument(
		"--match-set",
		default=None,
		help="Only emit for this set_folder (exact match)",
	)
	ap.add_argument(
		"--match-branch",
		default=None,
		help="Only emit for this branch_name column (exact match)",
	)
	ap.add_argument(
		"--all",
		action="store_true",
		help="Emit comments for every inventory row (many files)",
	)
	ap.add_argument(
		"--blob-ref",
		default="master",
		help="Git ref for github blob links in comments (e.g. your PR head SHA)",
	)
	ap.add_argument(
		"--max-bytes",
		type=int,
		default=60000,
		help="Split comments under this size (GitHub limit ~65536)",
	)
	ap.add_argument(
		"-o",
		"--output-dir",
		type=Path,
		default=None,
		help="Write pr-wave/comments/<branch>/comment-NN.md",
	)
	args = ap.parse_args()
	if not args.match_set and not args.match_branch and not args.all:
		ap.error("Specify --match-set, --match-branch, or --all")
	root = repo_root()
	inv = args.inventory or (root / "tools" / "pr-wave" / "inventory.tsv")
	out_dir = args.output_dir or (root / "tools" / "pr-wave" / "comments")
	out_dir.mkdir(parents=True, exist_ok=True)

	with inv.open(encoding="utf-8") as f:
		reader = csv.DictReader(f, delimiter="\t")
		rows = list(reader)

	for row in rows:
		if args.match_set and row["set_folder"] != args.match_set:
			continue
		if args.match_branch and row["branch_name"] != args.match_branch:
			continue
		branch = row["branch_name"].replace("/", "_")
		chunks = emit_scope_comment(
			row["serie_folder"],
			row["set_folder"],
			row["paths_json"],
			row.get("serie_id", ""),
			row.get("set_id", ""),
			args.blob_ref,
			args.max_bytes,
		)
		bdir = out_dir / branch
		bdir.mkdir(parents=True, exist_ok=True)
		for i, ch in enumerate(chunks, start=1):
			(bdir / f"comment-{i:02d}.md").write_text(ch, encoding="utf-8")
		print(f"{row['branch_name']}: {len(chunks)} chunk(s) -> {bdir}")

	return 0


if __name__ == "__main__":
	sys.exit(main())
