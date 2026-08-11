import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "シャドー悪エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[D]エネルギー1個ぶんとしてはたらく。このカードをつけている[D]ポケモンは、ベンチにいるかぎり、相手のワザのダメージを受けない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888353,
			},
		},
	],

	regulationMark: "J",
	rarity: "Rare",
};

export default card;
