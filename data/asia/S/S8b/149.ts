import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ガラルの仲間たち",
		'zh-tw': "伽勒爾的夥伴",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
		'zh-tw': "從自己的牌庫抽出3張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586665,
				tcgplayer: 571402,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578430,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "None",
};

export default card;
