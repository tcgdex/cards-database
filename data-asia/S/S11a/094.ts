import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "Vガードエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[C]エネルギー1個ぶんとしてはたらく。このカードをつけているポケモンが、相手の「ポケモンV」から受けるワザのダメージは「-30」される。この効果は、「Vガードエネルギー」が何枚ついていても、重ならない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673411,
				tcgplayer: 570857,
			},
		},
	],

	regulationMark: "F",
	rarity: "Mega Hyper Rare",
};

export default card;
