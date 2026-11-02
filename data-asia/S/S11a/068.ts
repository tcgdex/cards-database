import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "Vガードエネルギー",
		'zh-tw': "V防守能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[C]エネルギー1個ぶんとしてはたらく。このカードをつけているポケモンが、相手の「ポケモンV」から受けるワザのダメージは「-30」される。この効果は、「Vガードエネルギー」が何枚ついていても、重ならない。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。附有這張卡的寶可夢受到對手的「寶可夢【V】」招式的傷害「-30」點。無論附有多少張「V防守能量」卡，這個效果也不會重複。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673066,
				tcgplayer: 570831,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570913,
			},
		},
	],

	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
