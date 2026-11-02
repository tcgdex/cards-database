import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "パワフル無色エネルギー",
		'zh-tw': "強力無能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[無]エネルギー1個ぶんとしてはたらく。このカードをつけている[無]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「＋20」される。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 附有這張卡的【無】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+20」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586695,
				tcgplayer: 571431,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578457,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
