import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "レインボーエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードを手札からポケモンにつけたとき、そのポケモンにダメカンを1個のせる。このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。ポケモンについていないなら、[無]エネルギー1個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559236,
			},
		},
	],

	rarity: "Secret Rare",
};

export default card;
