import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "マダツボミ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "ひょろっとした 体つきだが 獲物を 捕らえるときの 動きは 目にも とまらないほど 素早い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はっぱカッター" },
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558190,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [69],
};

export default card;
