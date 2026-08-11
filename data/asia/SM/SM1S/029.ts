import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "マクノシタ",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "元々は 他の 地方から 連れてこられたが 今は アローラの マクノシタの ほうが 有名。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふいをつく" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
		{
			name: { ja: "かいりき" },
			damage: 40,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561706,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [296],
};

export default card;
