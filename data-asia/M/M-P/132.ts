import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ビリビリフィーバー" },
			cost: ["Lightning"],
		},
		{
			name: { ja: "かみなり" },
			damage: 200,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 894853,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [25],

	suffix: "EX",
};

export default card;
