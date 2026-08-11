import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "戒めの祠",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "ポケモンチェックのたび、おたがいの「ポケモンGX・EX」全員に、それぞれダメカンを1個のせる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544436,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "B",
	rarity: "None",
};

export default card;
