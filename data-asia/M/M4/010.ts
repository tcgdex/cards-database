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

	abilities: [
		{
			type: "Ability",
			name: { ja: "さいきのほのお" },
			effect: {
				ja: "自分の番に1回使える。自分の手札から基本炎エネルギーを1枚トラッシュする。そして自分のトラッシュからたねポケモンを3枚まで選び、ベンチに出す。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぐれんのつばさ" },
			damage: 130,
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [250],
};

export default card;
