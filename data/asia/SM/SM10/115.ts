import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "戒めの祠",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "ポケモンチェックのたび、おたがいの「ポケモンGX・EX」全員に、それぞれダメカンを1個のせる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557473,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "B",
	rarity: "Secret Rare",
};

export default card;
