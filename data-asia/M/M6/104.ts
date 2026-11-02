import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "グロウ草エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[G]エネルギー1個ぶんとしてはたらく。このカードをつけている[G]ポケモンは、最大HPが「＋20」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900137,
				tcgplayer: 709257,
			},
		},
	],

	regulationMark: "J",
	rarity: "Mega Hyper Rare",
};

export default card;
