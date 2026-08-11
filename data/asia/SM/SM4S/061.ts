import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ワープエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、[無]エネルギー1個ぶんとしてはたらく。このカードを手札からバトルポケモンにつけたとき、このカードをつけたポケモンをベンチポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560373,
			},
		},
	],

	rarity: "Secret Rare",
};

export default card;
