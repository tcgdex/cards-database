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
		ja: "体は 七色に 輝き  飛んだあとは 虹が できると  神話に 残されている ポケモン。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "さいきのほのお" }, "damage": "", "cost": ["Fire"], "effect": { "ja": "自分のトラッシュからたねポケモンを3枚まで選び、ベンチに出す。" } },
		{ "name": { "ja": "ぐれんのつばさ" }, "damage": "130", "cost": ["Fire", "Fire", "Fire"], "effect": { "ja": "このポケモンについている「Fire」エネルギーを1個選び、トラッシュする。" } }
	],

	
	weaknesses: [{ "type": "Water", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Uncommon",
	dexId: [250],
	regulationMark: "I",
};

export default card;
