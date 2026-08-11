import { Card } from "models/database/card";
import Set from "../SM7";

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
				cardmarket: 559055,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
