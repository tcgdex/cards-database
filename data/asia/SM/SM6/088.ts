import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ハウ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559633,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
