import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "レスキューキャリー",
		'zh-tw': "救援行李箱",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからHPが「90」以下のポケモンを2枚まで選び、相手に見せて、手札に加える。",
		'zh-tw': "從自己的棄牌區選擇最多2張HP為「90」以下的寶可夢卡，在給對手看過後加入手牌。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571648,
				tcgplayer: 569382,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
