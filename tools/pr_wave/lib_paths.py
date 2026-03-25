"""
Shared path logic for splitting Cardium data diffs into one upstream PR per set.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from pathlib import Path


@dataclass(frozen=True)
class SetScope:
	"""One logical set = folder data/<serie>/<set>/ plus optional set definition file."""

	serie_folder: str
	set_folder: str
	card_basenames: tuple[str, ...] = field(default_factory=tuple)
	other_paths: tuple[str, ...] = field(default_factory=tuple)

	def key(self) -> str:
		return f"{self.serie_folder}::{self.set_folder}"

	def branch_slug(self) -> str:
		"""Safe branch name segment (no slashes)."""
		raw = f"{self.serie_folder}-{self.set_folder}"
		s = re.sub(r"[^a-zA-Z0-9._-]+", "-", raw)
		s = re.sub(r"-+", "-", s).strip("-")
		return s[:200] if len(s) > 200 else s


def repo_root() -> Path:
	return Path(__file__).resolve().parents[2]


def parse_data_diff_paths(paths: list[str]) -> tuple[dict[str, SetScope], list[str]]:
	"""
	Split git paths under data/ into SetScope buckets and leftover paths.
	"""
	scopes: dict[str, SetScope] = {}
	leftovers: list[str] = []

	for raw in paths:
		p = raw.strip()
		if not p.startswith("data/"):
			continue
		parts = p.split("/")
		# data/<serie>.ts
		if len(parts) == 2 and parts[1].endswith(".ts"):
			leftovers.append(p)
			continue
		# data/<serie>/<set>.ts
		if len(parts) == 3 and parts[2].endswith(".ts"):
			serie = parts[1]
			set_name = parts[2][: -len(".ts")]
			k = f"{serie}::{set_name}"
			if k not in scopes:
				scopes[k] = SetScope(serie_folder=serie, set_folder=set_name)
			sc = scopes[k]
			scopes[k] = SetScope(
				serie_folder=sc.serie_folder,
				set_folder=sc.set_folder,
				card_basenames=sc.card_basenames,
				other_paths=tuple(sorted(set(sc.other_paths + (p,)))),
			)
			continue
		# data/<serie>/<set>/<card>.ts
		if len(parts) == 4 and parts[3].endswith(".ts"):
			serie = parts[1]
			set_name = parts[2]
			card_base = parts[3][: -len(".ts")]
			k = f"{serie}::{set_name}"
			if k not in scopes:
				scopes[k] = SetScope(serie_folder=serie, set_folder=set_name)
			sc = scopes[k]
			bases = tuple(sorted(set(sc.card_basenames + (card_base,))))
			scopes[k] = SetScope(
				serie_folder=sc.serie_folder,
				set_folder=sc.set_folder,
				card_basenames=bases,
				other_paths=sc.other_paths,
			)
			continue
		leftovers.append(p)

	return scopes, leftovers


def set_definition_path(scope: SetScope) -> Path:
	return repo_root() / "data" / scope.serie_folder / f"{scope.set_folder}.ts"


def set_cards_dir(scope: SetScope) -> Path:
	return repo_root() / "data" / scope.serie_folder / scope.set_folder


def serie_definition_path(scope: SetScope) -> Path:
	return repo_root() / "data" / f"{scope.serie_folder}.ts"


_ID_RE = re.compile(r'\bid:\s*"([^"]+)"')


def read_ts_id(path: Path) -> str | None:
	if not path.is_file():
		return None
	text = path.read_text(encoding="utf-8", errors="replace")
	m = _ID_RE.search(text)
	return m.group(1) if m else None


def resolve_asset_ids(scope: SetScope) -> tuple[str | None, str | None]:
	"""Return (serie_id, set_id) for assets.tcgdex.net URLs."""
	serie_id = read_ts_id(serie_definition_path(scope))
	set_id = read_ts_id(set_definition_path(scope))
	return serie_id, set_id


def scope_paths_from_diff(scope: SetScope, diff_paths: set[str]) -> list[str]:
	"""Paths belonging to this scope that appear in the upstream..Cardium diff."""
	prefix = f"data/{scope.serie_folder}/{scope.set_folder}/"
	set_file = f"data/{scope.serie_folder}/{scope.set_folder}.ts"
	out: list[str] = []
	for p in sorted(diff_paths):
		if p == set_file or p.startswith(prefix):
			out.append(p)
	return out


def load_branch_filter(path: Path | None) -> set[str] | None:
	"""Branch names to include (e.g. pr/Mega-Evolution-Ascended-Heroes). None = no filter."""
	if path is None:
		return None
	text = path.read_text(encoding="utf-8")
	out: set[str] = set()
	for line in text.splitlines():
		line = line.split("#", 1)[0].strip()
		if line:
			out.add(line)
	return out
