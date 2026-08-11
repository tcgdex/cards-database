import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポピー",
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のポケモン1匹についているエネルギーを2個まで選び、自分の別のポケモン1匹につけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587868,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
