import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "チェレンの気くばり",
		'zh-tw': "黑連的關心",
	},

	illustrator: "chibi",
	category: "Trainer",

	effect: {
		ja: "ダメカンがのっている自分の[C]ポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。",
		'zh-tw': "選擇1隻自己的身上放置有傷害指示物的【無】寶可夢，將那隻寶可夢與附加的卡，全部放回手牌。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687803,
				tcgplayer: 571779,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Special illustration rare",
};

export default card;
