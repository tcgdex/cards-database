import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ケロマツ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "繊細な 泡で 体を 包み 肌を 守る。 のんきに 見せかけて 抜け目なく 周囲を うかがう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたく" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563487,
				tcgplayer: 605336,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [656],
};

export default card;
