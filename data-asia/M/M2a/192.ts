import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "プリズムエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、[無]エネルギー1個ぶんとしてはたらく。たねポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861435,
			},
		},
	],

	regulationMark: "I",
	rarity: "None",
};

export default card;
