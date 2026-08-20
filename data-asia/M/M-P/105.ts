import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒノアラシ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "臆病で いつも 体を まるめている。 襲われると 背中の 炎を 燃え上がらせて 身を守る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 40,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891803,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [155],
};

export default card;
