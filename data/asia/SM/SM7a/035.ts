import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラディグダ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],

	description: {
		ja: "金色の 髭は センサー機能を 持っている。 穴から だして 周りの 様子を うかがっている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: [],
			effect: {
				ja: "自分の山札にあるたねポケモンを1枚、ベンチに出す。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558923,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [50],
};

export default card;
