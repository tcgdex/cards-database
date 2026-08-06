import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "コーティング鋼エネルギー",
		'zh-tw': "塗層鋼能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[鋼]エネルギー1個ぶんとしてはたらく。このカードをつけている[鋼]ポケモンの弱点は、すべてなくなる。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【鋼】能量。 附有這張卡的【鋼】寶可夢的弱點全部消除。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586694,
				tcgplayer: 571430,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578456,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
