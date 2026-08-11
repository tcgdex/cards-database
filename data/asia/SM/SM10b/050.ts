import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リサイクルエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは[無]エネルギー1個ぶんとしてはたらく。このカードは、場からトラッシュされるとき、トラッシュせず、手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557252,
			},
		},
	],

	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
