import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウィークガードエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは[無]エネルギー1個ぶんとしてはたらく。このカードをつけているポケモンの弱点は、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556734,
			},
		},
	],

	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
