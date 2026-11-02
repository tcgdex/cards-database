import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "災いの箱",
		'zh-tw': "災禍箱",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「ポケモンV」のHPがまんたんの状態で、相手のポケモンからワザのダメージを受けてきぜつしたとき、ワザを使ったポケモンにダメカンを8個のせる。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656390,
				tcgplayer: 570729,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577134,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
