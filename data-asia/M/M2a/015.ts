import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のタマンチュラ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "体を 包みこむ 糸玉は 天敵の ストライクの カマを はね返す 弾力性を 持つ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "とっしん"}, "damage": "30", "cost": ["Grass"], "effect": {"ja": "このポケモンにも10ダメージ。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [917],
};

export default card;
