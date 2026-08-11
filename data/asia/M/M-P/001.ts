import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "チコリータ",
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "日差しを 浴びるのが 大好き。 頭の 葉っぱを 使って 暖かい 場所を 探す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はっぱカッター" },
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 839193,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [152],
};

export default card;
