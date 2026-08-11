import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ストーン闘エネルギー",
		'zh-tw': "岩石鬥能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[闘]エネルギー1個ぶんとしてはたらく。このカードをつけている[闘]ポケモンが、相手のポケモンから受けるワザのダメージは「-20」される。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【鬥】能量。附有這張卡的【鬥】寶可夢，受到對手的寶可夢招式的傷害「-20」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586692,
				tcgplayer: 571428,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578454,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
