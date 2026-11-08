import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "博士の研究",
		'zh-tw': "博士的研究（山梨博士）",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべてトラッシュし、山札を7枚引く。",
		'zh-tw': "將自己的手牌全部丟棄，從牌庫抽出7張卡。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687810,
				tcgplayer: 571786,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
