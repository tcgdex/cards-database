import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドローエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは[無]エネルギー1個ぶんとしてはたらく。このカードを手札からポケモンにつけたとき、自分の山札を1枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556797,
			},
		},
	],

	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
