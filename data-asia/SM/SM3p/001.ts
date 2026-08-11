import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギダネ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "生まれたときから 背中に 不思議な タネが 植えてあって 体と ともに 育つという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はっぱカッター" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560159,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [1],
};

export default card;
