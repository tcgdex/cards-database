import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チェレン",
	},

	illustrator: "REND",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 829090,
				tcgplayer: 644687,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
