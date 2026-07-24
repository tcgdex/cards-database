import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ユニットエネルギー草炎水",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[草][炎][水]の3つのタイプのエネルギー1個ぶんとしてはたらく。ポケモンについていないなら、[無]エネルギー1個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560032,
			},
		},
	],

	rarity: "Secret Rare",
};

export default card;
