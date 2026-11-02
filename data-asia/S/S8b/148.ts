import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アセロラの予感",
		'zh-tw': "阿塞蘿拉的預感",
	},

	illustrator: "Shiburingaru",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中にあるトレーナーズの枚数ぶん、自分の山札を引く。",
		'zh-tw': "查看對手的手牌，從自己的牌庫抽出與其中訓練家卡的張數相同數量的卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586664,
				tcgplayer: 571401,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578429,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "None",
};

export default card;
