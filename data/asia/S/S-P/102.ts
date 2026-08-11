import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジムトレーナー",
		'zh-tw': "葉伊布",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を2枚引く。前の相手の番に、自分のポケモンがきぜつしていたなら、さらに2枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525195,
				tcgplayer: 597303,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
