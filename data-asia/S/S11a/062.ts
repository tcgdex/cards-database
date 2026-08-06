import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "きんきゅうゼリー",
		'zh-tw': "緊急果凍",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいの番の終わりに、このカードをつけているポケモンの残りHPが「30」以下でダメカンがのっているなら、そのポケモンのHPを「120」回復する。その後、このカードをトラッシュする。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673060,
				tcgplayer: 570825,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570907,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
