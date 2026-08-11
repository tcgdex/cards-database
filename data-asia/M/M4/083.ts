import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "マグネット鋼エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[M]エネルギー1個ぶんとしてはたらく。このカードをつけている[M]ポケモンは、にげるためのエネルギーが、すべてなくなる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 876982,
			},
		},
	],

	regulationMark: "J",
	rarity: "Rare",
};

export default card;
