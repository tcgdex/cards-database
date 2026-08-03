import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ハイド悪エネルギー",
		'zh-tw': "潛行惡能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[悪]エネルギー1個ぶんとしてはたらく。このカードをつけている[悪]ポケモンのにげるためのエネルギーは、すべてなくなる。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【惡】能量。附有這張卡的【惡】寶可夢【撤退】所需的能量全部消除。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586693,
				tcgplayer: 571429,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578455,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
