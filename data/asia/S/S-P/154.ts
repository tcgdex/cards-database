import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ハイド悪エネルギー",
		'zh-tw': "瑪狃拉",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[悪]エネルギー1個ぶんとしてはたらく。このカードをつけている[悪]ポケモンのにげるためのエネルギーは、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597352,
			},
		},
	],

	regulationMark: "D",
	rarity: "Promo",
};

export default card;
