import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デカグース",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "もともと アローラには いなかったが 昔 コラッタが 大量に 発生したときに 連れて来られた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アラートヘッド" },
			damage: 90,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「ポケモンGX・EX」なら、このワザのダメージは「30」になる。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557040,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤングース",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [735],
};

export default card;
