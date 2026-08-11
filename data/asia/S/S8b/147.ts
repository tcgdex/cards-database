import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "メモリーカプセル",
		'zh-tw': "回憶膠囊",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、進化前に持っていたワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586663,
				tcgplayer: 571400,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578428,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "D",
	rarity: "None",
};

export default card;
