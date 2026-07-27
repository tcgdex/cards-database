import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ズガイドス",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "ズガイドスの 化石が 見つかる 地層では へし折れた 樹木の 化石も 一緒に 出てくるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どつく" },
			damage: 30,
			cost: ["Fighting"],
		},
		{
			name: { ja: "ヘッドバット" },
			damage: 50,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559847,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [408],
};

export default card;
