import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "マダツボミ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "ひょろっとした 体つきだが 獲物を 捕らえるときの 動きは 目にも とまらないほど 素早い。",
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
				cardmarket: 561467,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [69],
};

export default card;
