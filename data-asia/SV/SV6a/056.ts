import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "夜のタンカ",
		'zh-tw': "夜間擔架",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンまたは基本エネルギーを1枚選び、相手に見せて、手札に加える。",
		'zh-tw': "從自己的棄牌區選擇1張寶可夢卡或者基本能量卡，在給對手看過後加入手牌。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773805,
				tcgplayer: 566307,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
