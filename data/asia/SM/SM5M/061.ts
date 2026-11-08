import { Card } from "models/database/card";
import Set from "../SM5M";

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
			type: "holo",
			thirdParty: {
				cardmarket: 559874,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Rare",
};

export default card;
