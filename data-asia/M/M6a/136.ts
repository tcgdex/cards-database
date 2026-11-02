import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		ja: "ほっぺたの両側に小さい電気袋をもつ。ピンチのときに放電する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "でんげき" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを投げて「うら」なら、自分にも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908314,
			},
		},
	],

	retreat: 1,
	rarity: "Classic Collection",
	dexId: [25],
};

export default card;
