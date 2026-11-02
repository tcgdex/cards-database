import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャビー",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "毛づくろいで お腹に 溜まった 抜け毛を 燃やして 火を 吹く。 毛の 吐きかたで 炎も 変化。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひだね" },
			damage: 20,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560174,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [725],
};

export default card;
