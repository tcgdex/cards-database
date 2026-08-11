import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユニットエネルギー草炎水",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[草][炎][水]の3つのタイプのエネルギー1個ぶんとしてはたらく。ポケモンについていないなら、[無]エネルギー1個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559799,
			},
		},
	],

	rarity: "None",
};

export default card;
