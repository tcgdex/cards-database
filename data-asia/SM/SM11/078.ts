import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "デカグース",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "もともと アローラには いなかったが 昔 コラッタが 大量に 発生したときに 連れて来られた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アラートヘッド" },
			damage: 90,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンGX・EX」なら、このワザのダメージは「30」になる。",
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
		ja: "ヤングース",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [735],
};

export default card;
