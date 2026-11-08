import { Card } from "models/database/card";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミクリ",
		'zh-tw': "米可利",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。相手は、のぞむなら、山札を1枚引く。その場合、自分は、さらに山札を1枚引く。",
		'zh-tw': "從自己的牌庫抽出3張卡。對手若希望，從牌庫抽出1張卡。這個情況下，自己再從牌庫抽出1張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673064,
				tcgplayer: 570829,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570911,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Common",
};

export default card;
