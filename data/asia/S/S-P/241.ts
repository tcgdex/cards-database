import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピオニー",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべてトラッシュし、自分の山札からトレーナーズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 606610,
				tcgplayer: 597423,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
