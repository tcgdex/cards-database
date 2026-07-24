import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャビー",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "毛づくろいで お腹に 溜まった 抜け毛を 燃やして 火を 吹く。 毛の 吐きかたで 炎も 変化。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: { ja: "ほのお" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561535,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [725],
};

export default card;
