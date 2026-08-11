import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サイキックメモリ",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけている「シルヴァディGX」は、ポケモンになる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560360,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
