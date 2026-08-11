import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロナ",
		'zh-tw': "姆克兒",
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 534092,
				tcgplayer: 597353,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "Promo",
};

export default card;
