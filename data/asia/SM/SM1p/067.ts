import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダブル無色エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、[無]エネルギー2個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561595,
			},
		},
	],

	rarity: "Secret Rare",
};

export default card;
