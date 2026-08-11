import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハウ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560225,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
