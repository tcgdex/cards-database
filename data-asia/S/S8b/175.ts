import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ホラー超エネルギー",
		'zh-tw': "恐怖超能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[超]エネルギー1個ぶんとしてはたらく。このカードをつけている[超]ポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを2個のせる。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【超】能量。 當附有這張卡的【超】寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置2個傷害指示物。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586691,
				tcgplayer: 571427,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578453,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
