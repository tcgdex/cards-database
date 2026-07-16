import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ネオラント",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "深い 海の 底は 獲物が 少ない。 貴重な エサを 巡り ランターンと 激しく 争う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ネオントリック" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、相手のバトルポケモンについているエネルギーを1個、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556973,
			},
		},
	],

	evolveFrom: {
		ja: "ケイコウオ",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Common",
	dexId: [457],
};

export default card;
