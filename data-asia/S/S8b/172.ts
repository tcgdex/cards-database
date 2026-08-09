import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒート炎エネルギー",
		'zh-tw': "高溫火能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[炎]エネルギー1個ぶんとしてはたらく。このカードをつけている[炎]ポケモンの最大HPは「20」大きくなる。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【火】能量。附有這張卡的【火】寶可夢的最大HP增加「20」。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586688,
				tcgplayer: 571424,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578450,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
