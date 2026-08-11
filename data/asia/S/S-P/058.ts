import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホップ",
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
				tcgplayer: 597277,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
