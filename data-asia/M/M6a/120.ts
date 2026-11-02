import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャース",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ネコにこばん" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908298,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [52],
};

export default card;
