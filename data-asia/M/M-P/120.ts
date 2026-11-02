import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャビー",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "毛づくろいで お腹に 溜まった 抜け毛を 燃やして 火を 吹く。 毛の 吐きかたで 炎も 変化。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのおのキバ" },
			damage: 20,
			cost: ["Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891847,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [725],
};

export default card;
