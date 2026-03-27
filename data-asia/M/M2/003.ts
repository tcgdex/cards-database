import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ラフレシア",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	evolveFrom: {
		ja: "クサイハナ",
	},

	attacks: [
		{
			name: { ja: "かふんばくだん" },
			damage: 30,
			cost: ["Grass"],
			effect: { ja: "" },
		},
		{
			name: { ja: "いきいきはな" },
			damage: 60,
			cost: ["Grass"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [45],
};

export default card;
