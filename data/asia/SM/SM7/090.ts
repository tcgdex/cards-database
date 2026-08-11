import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハウ",
	},

	illustrator: "TOKIYA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559051,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
