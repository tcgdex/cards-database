import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのマダツボミ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "ひょろっとした 体つきだが 獲物を 捕らえるときの 動きは 目にも とまらないほど 素早い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つるでうつ" },
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
				cardmarket: 863293,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [69],
};

export default card;
