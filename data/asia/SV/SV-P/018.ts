import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "学習装置",
		'zh-tw': "卡蒂狗",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンが、相手のポケモンからワザのダメージを受けてきぜつするたび、そのポケモンについている基本エネルギーを1枚選び、このカードをつけているポケモンにつけ替えてよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 699715,
				tcgplayer: 587775,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
