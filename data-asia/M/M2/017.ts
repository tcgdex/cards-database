import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラム",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 30,
			cost: ["Fire"],
		},
		{
			name: { ja: "バーニングフレア" },
			damage: 240,
			cost: ["Fire", "Fire", "Fire", "Fire"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare Holo",
	dexId: [643],
};

export default card;
