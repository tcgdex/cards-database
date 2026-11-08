import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウォーターメモリ",
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
				cardmarket: 551101,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
