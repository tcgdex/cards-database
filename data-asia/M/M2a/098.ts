import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "イイネイヌ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "すぐ 頭に 血が 上ってしまう 荒くれもの。 首の 鎖を 振り回し なんでも 叩き潰す。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "なぐる"}, "cost": ["Fighting"], "damage": 20}, {"name": {"ja": "おれいまいり"}, "cost": ["Fighting", "Fighting", "Colorless"], "damage": "80＋", "effect": {"ja": "前の相手の番に、相手がとったサイドの枚数×60ダメージ追加。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [1014],
};

export default card;
