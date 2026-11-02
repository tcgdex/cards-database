import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダメージポンプ",
		'zh-tw': "傷害水泵",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "自分の場のポケモン1匹にのっているダメカンを2個まで選び、自分の別のポケモンに好きなようにのせ替える。",
		'zh-tw': "選擇最多2個自己的1隻場上寶可夢身上放置的傷害指示物，以任意方式改放於自己的其他寶可夢身上。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656388,
				tcgplayer: 570727,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577132,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
