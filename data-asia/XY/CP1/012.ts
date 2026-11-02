import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマ団のココドラ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "鉄も 食べてしまう ココドラは 敵の 船だって あっと いう間に 食べて 壊して しまうんだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563732,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [304],
};

export default card;
