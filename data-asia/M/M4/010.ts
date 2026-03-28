import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ホウオウ",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "さいきのほのお"}, "cost": ["Fire"], "effect": {"ja": "自分のトラッシュからたねポケモンを3枚まで選び、ベンチに出す。"}}, {"name": {"ja": "ぐれんのつばさ"}, "cost": ["Fire", "Fire", "Fire"], "damage": 130, "effect": {"ja": "このポケモンについているエネルギーを1個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [250],
};

export default card;
