import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ソニア",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札からたねポケモンを2枚まで、または基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525020,
				tcgplayer: 597266,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
