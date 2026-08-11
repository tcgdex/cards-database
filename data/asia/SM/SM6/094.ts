import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユニットエネルギー闘悪妖",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[闘][悪][妖]の3つのタイプのエネルギー1個ぶんとしてはたらく。ポケモンについていないなら、[無]エネルギー1個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559639,
			},
		},
	],

	rarity: "Uncommon",
};

export default card;
