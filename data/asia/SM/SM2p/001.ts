import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マダツボミ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "ひょろっとした 体つきだが 獲物を 捕らえるときの 動きは 目にも とまらないほど 素早い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つるのムチ" },
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
				cardmarket: 561204,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [69],
};

export default card;
