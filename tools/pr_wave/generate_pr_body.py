#!/usr/bin/env python3
"""
Generate a single-set PR body with:
- Summary bullets
- Markdown table containing Pokepedia picture links per changed card

Typical usage:
  python3 tools/pr_wave/generate_pr_body.py --match-branch pr/<branch> > /tmp/pr-body.md
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qs, quote, unquote, urlencode, urlparse
from urllib.request import Request, urlopen

from lib_paths import repo_root


_EN_NAME_QUOTED = re.compile(r'"en"\s*:\s*"((?:\\.|[^"\\])*)"')
_EN_NAME_UNQUOTED = re.compile(r"\ben\s*:\s*\"((?:\\.|[^\"\\])*)\"")
_DIRECT_NAME = re.compile(r"name\s*:\s*\"((?:\\.|[^\"\\])*)\"")
_ANY_LANG_NAME = re.compile(r"\b(?:fr|es|it|pt|de)\s*:\s*\"((?:\\.|[^\"\\])*)\"")


def decode_ts_string(value: str) -> str:
	return value.replace("\\\\", "\\").replace('\\"', '"')


def read_en_name(card_path: Path) -> str:
	text = card_path.read_text(encoding="utf-8", errors="replace")
	name_index = text.find("name:")
	scope = text[name_index : name_index + 1200] if name_index >= 0 else text

	for pattern in (_DIRECT_NAME, _EN_NAME_UNQUOTED, _EN_NAME_QUOTED, _ANY_LANG_NAME):
		match = pattern.search(scope)
		if match:
			return decode_ts_string(match.group(1))
	return card_path.stem


def markdown_escape(text: str) -> str:
	return text.replace("|", "\\|").replace("\n", " ").strip()


def extract_direct_pokepedia_image_url(raw_url: str | None) -> str | None:
	if not raw_url:
		return None
	if "pokepedia.fr/images" in raw_url:
		return raw_url
	parsed = urlparse(raw_url)
	upstream = parse_qs(parsed.query).get("upstream", [None])[0]
	if upstream:
		decoded = unquote(upstream)
		if "pokepedia.fr/images" in decoded:
			return decoded
	if "pokepedia.fr" in raw_url:
		return raw_url
	return None


def fetch_card_detail(api_base: str, card_id: str, timeout: float) -> tuple[dict | None, bool]:
	"""
	Return (payload, api_available).
	If api_available is False, caller should stop requesting further cards.
	"""
	url = f"{api_base.rstrip('/')}/{quote(card_id, safe='')}"
	req = Request(url, headers={"Accept": "application/json"})
	try:
		with urlopen(req, timeout=timeout) as res:
			payload = json.load(res)
			if isinstance(payload, dict):
				return payload, True
			return None, True
	except HTTPError:
		return None, True
	except URLError:
		# Server down / unreachable: disable API to avoid long retries per card.
		return None, False
	except TimeoutError:
		return None, False


def pick_pokepedia_links(card_detail: dict | None) -> tuple[str | None, str | None]:
	"""
	Return (picture_url, page_url).
	Picture URL is a direct Pokepedia image URL when resolvable.
	"""
	if not isinstance(card_detail, dict):
		return None, None
	page_url = card_detail.get("sourceUrl")
	if not isinstance(page_url, str) or not page_url:
		page_url = None

	candidates: list[str] = []
	images = card_detail.get("images")
	if isinstance(images, dict):
		for key in ("hdUrl", "thumbnailUrl"):
			value = images.get(key)
			if isinstance(value, str) and value:
				candidates.append(value)
	for key in ("hdUrl", "thumbnailUrl"):
		value = card_detail.get(key)
		if isinstance(value, str) and value:
			candidates.append(value)

	for candidate in candidates:
		resolved = extract_direct_pokepedia_image_url(candidate)
		if resolved:
			return resolved, page_url

	return None, page_url


def fallback_search_url(card_name: str) -> str:
	return f"https://www.pokepedia.fr/index.php?{urlencode({'search': card_name})}"


def main() -> int:
	ap = argparse.ArgumentParser(description=__doc__)
	ap.add_argument("--inventory", type=Path, default=None)
	ap.add_argument(
		"--match-branch",
		required=True,
		help="Branch name from inventory.tsv (e.g. pr/Scarlet-Violet-151)",
	)
	ap.add_argument(
		"--api-base",
		default="http://localhost:3000/api/v1/datasources/pokepedia-fr/fr/cards",
		help="Pokepedia datasource card-detail base endpoint",
	)
	ap.add_argument(
		"--timeout",
		type=float,
		default=2.5,
		help="HTTP timeout (seconds) for datasource lookups",
	)
	ap.add_argument(
		"--no-api",
		action="store_true",
		help="Disable datasource calls and use Pokepedia search links only",
	)
	ap.add_argument(
		"-o",
		"--output",
		type=Path,
		default=None,
		help="Output file (stdout if omitted)",
	)
	args = ap.parse_args()

	root = repo_root()
	inventory = args.inventory or (root / "tools" / "pr-wave" / "inventory.tsv")
	if not inventory.is_file():
		print(f"[x] Missing inventory: {inventory}", file=sys.stderr)
		return 1

	with inventory.open(encoding="utf-8") as f:
		rows = list(csv.DictReader(f, delimiter="\t"))
	target = [row for row in rows if row.get("branch_name") == args.match_branch]
	if not target:
		print(f"[x] Branch not found in inventory: {args.match_branch}", file=sys.stderr)
		return 1
	if len(target) > 1:
		print(f"[x] Branch appears multiple times in inventory: {args.match_branch}", file=sys.stderr)
		return 1
	row = target[0]

	paths = json.loads(row["paths_json"])
	card_paths = sorted(
		p for p in paths if p.endswith(".ts") and p != f"data/{row['serie_folder']}/{row['set_folder']}.ts"
	)
	set_id = row.get("set_id", "").strip()

	lines: list[str] = []
	lines.extend(
		[
			"## Summary",
			f"- Update only **{row['set_folder']}** in **{row['serie_folder']}**.",
			f"- Scope is limited to this set definition and **{len(card_paths)}** changed card files.",
			"- Queue-safe scope: no compiler/server/meta/global paths included.",
			"",
			"## Review links",
			"| Card | Number | Pokepedia picture |",
			"|---|---:|---|",
		]
	)

	api_enabled = not args.no_api
	fallback_count = 0

	for rel_path in card_paths:
		stem = Path(rel_path).stem
		card_file = root / rel_path
		card_name = read_en_name(card_file) if card_file.is_file() else stem
		card_id = f"{set_id}-{stem}" if set_id else ""

		card_detail: dict | None = None
		if api_enabled and card_id:
			card_detail, available = fetch_card_detail(args.api_base, card_id, args.timeout)
			if not available:
				api_enabled = False

		picture_url, page_url = pick_pokepedia_links(card_detail)
		if picture_url:
			link_cell = f"[picture]({picture_url})"
			if page_url:
				link_cell += f" · [page]({page_url})"
		elif page_url:
			link_cell = f"[page]({page_url})"
			fallback_count += 1
		else:
			link_cell = f"[search]({fallback_search_url(card_name)})"
			fallback_count += 1

		lines.append(
			f"| {markdown_escape(card_name)} | {markdown_escape(stem)} | {link_cell} |"
		)

	if fallback_count > 0:
		lines.extend(
			[
				"",
				f"_Note: {fallback_count} card(s) use page/search links because a direct Pokepedia picture URL was unavailable._",
			]
		)

	output = "\n".join(lines).rstrip() + "\n"
	if args.output:
		args.output.write_text(output, encoding="utf-8")
	else:
		sys.stdout.write(output)
	return 0


if __name__ == "__main__":
	sys.exit(main())

