import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ニャース",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ネコにこばん" },
			damage: 10,
			cost: [],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908293,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [52],
};

export default card;
