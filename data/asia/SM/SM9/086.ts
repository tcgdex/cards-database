import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロナ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558458,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "Uncommon",
};

export default card;
