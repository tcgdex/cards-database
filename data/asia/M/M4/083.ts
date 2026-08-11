import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグネット鋼エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[M]エネルギー1個ぶんとしてはたらく。このカードをつけている[M]ポケモンは、にげるためのエネルギーが、すべてなくなる。",
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
