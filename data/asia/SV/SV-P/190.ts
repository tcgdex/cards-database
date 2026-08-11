import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジェットエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[C]エネルギー1個ぶんとしてはたらく。このカードを手札からベンチポケモンにつけたとき、このカードをつけたポケモンを、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793386,
			},
		},
	],

	regulationMark: "G",
	rarity: "Promo",
};

export default card;
