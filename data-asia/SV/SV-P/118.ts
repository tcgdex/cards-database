import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポピー",
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		ja: "自分の場のポケモン1匹についているエネルギーを2個まで選び、自分の別のポケモン1匹につけ替える。",
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
