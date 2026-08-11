import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "博士の研究",
		'zh-tw': "頑皮熊貓",
	},

	illustrator: "Yusuke Kozaki",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべてトラッシュし、山札を7枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 569232,
				tcgplayer: 597407,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
