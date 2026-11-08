import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ローズ",
		'zh-tw': "隆隆石",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから基本エネルギーを2枚まで選び、自分の「ポケモンVMAX」1匹につける。その後、自分の手札をすべてトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597321,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
