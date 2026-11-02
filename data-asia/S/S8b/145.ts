import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ふうせん",
		'zh-tw': "氣球",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、にげるためのエネルギーが2個ぶん少なくなる。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586661,
				tcgplayer: 571398,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578426,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "D",
	rarity: "None",
};

export default card;
