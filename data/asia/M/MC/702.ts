import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ガイ",
	},

	illustrator: "Teeziro",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
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
