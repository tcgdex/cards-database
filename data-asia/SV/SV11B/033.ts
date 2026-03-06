import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "シビシラス",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		ja: "１匹の 電力は 小さいが たくさんの シビシラスが つながると 雷と 同じ 威力になる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じっとする" },
			cost: ["Colorless"],
			effect: { ja: "このポケモンのHPを「10」回復する。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [602],

	thirdParty: {
		cardmarket: 828482,
		tcgplayer: 636387,
	},
};

export default card;
