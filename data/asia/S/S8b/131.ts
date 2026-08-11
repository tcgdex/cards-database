import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "うねりの扇",
		'zh-tw': "潮漩之扇",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "相手の場のポケモンについている特殊エネルギーを1個選び、相手の山札の下にもどす。",
		'zh-tw': "選擇1個對手的場上寶可夢身上附加的特殊能量，放回對手的牌庫下方。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586647,
				tcgplayer: 571384,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578412,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "None",
};

export default card;
