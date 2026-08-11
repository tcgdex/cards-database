import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リオル",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'ja-jp': "仲間同士で 波動を 出して コミュニケーションを とっている。 一晩中 走り続けられる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かそくづき" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「かそくづき」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 839267,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [447],
};

export default card;
