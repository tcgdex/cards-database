import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ハウ",
	},

	illustrator: "TOKIYA",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558729,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
