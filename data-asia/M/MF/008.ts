import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "エレズン",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "わがままで とても 甘えん坊。 体内の ２つの 袋に 毒と 電気を それぞれ 溜める。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908370,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [848],
};

export default card;
