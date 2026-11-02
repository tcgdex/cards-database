import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "モノズ",
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "棲み処は 洞窟の 奥深く。 エサも 少ないので 動くものは なんでも 食いつき 食べようとする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Darkness"],
		},
		{
			name: { ja: "ずつき" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908383,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [633],
};

export default card;
