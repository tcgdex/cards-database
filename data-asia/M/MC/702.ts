import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ガイ",
	},

	illustrator: "Teeziro",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864004,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "None",
};

export default card;
