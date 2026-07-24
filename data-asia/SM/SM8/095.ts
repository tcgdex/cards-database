import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "メモリーエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、[無]エネルギー1個ぶんとしてはたらく。このカードをつけているポケモンは、進化前に持っていたワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558734,
			},
		},
	],

	rarity: "Common",
};

export default card;
