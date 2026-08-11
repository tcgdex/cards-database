import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ルリナ",
		'zh-tw': "露璃娜",
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから[水]ポケモンと[水]エネルギーを合計4枚まで選び、相手に見せて、手札に加える。",
		'zh-tw': "從自己的棄牌區選擇【水】寶可夢卡與【水】能量卡合計最多4張，在給對手看過後加入手牌。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586680,
				tcgplayer: 571416,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578442,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "None",
};

export default card;
