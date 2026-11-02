import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "いかついメット",
		'zh-tw': "粗硬頭盔",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンについているエネルギーを1個選び、相手の手札にもどす。",
		'zh-tw': "當附有這張卡的寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，選擇1個使用招式的寶可夢身上附加的能量，放回對手的手牌。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560477,
				tcgplayer: 569193,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
