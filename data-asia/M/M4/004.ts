import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "マスキッパ",
	},

	illustrator: "Heisuke Kitazawa",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "まるかじり"}, "cost": ["Colorless", "Colorless", "Colorless"], "damage": "80＋", "effect": {"ja": "相手のバトルポケモンのにげるためのエネルギーがないなら、80ダメージ追加。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [455],
};

export default card;
