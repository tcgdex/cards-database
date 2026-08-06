import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "たっぷりバケツ",
		'zh-tw': "足量水桶",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "自分の山札から[水]エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇最多2張【水】能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586653,
				tcgplayer: 571390,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578418,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "D",
	rarity: "None",
};

export default card;
