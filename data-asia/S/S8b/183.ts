import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ツインエネルギー",
		'zh-tw': "雙子能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[無]エネルギー2個ぶんとしてはたらく。「ポケモンV・GX」についているなら、[無]エネルギー1個ぶんとしてはたらく。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供2個【無】能量。 若附於「寶可夢【V】・【GX】」身上，則視為提供1個【無】能量。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586699,
				tcgplayer: 571435,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578461,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
