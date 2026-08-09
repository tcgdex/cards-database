import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガルーラ",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "腹の 袋に 子どもが いるが フットワークは とても 軽い。 素早いジャブで 相手を 威嚇。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "メガトンパンチ" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 786657,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [115],
};

export default card;
