import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ソッドとシルディ",
		'zh-tw': "毒電嬰",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュからトレーナーズを1枚選び、相手に見せて、手札に加えて良いかを相手にたずねる。相手が良いなら、選んだカードを手札に加える。良くないなら、選んだカードをトラッシュにもどし、自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525275,
				tcgplayer: 597319,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
