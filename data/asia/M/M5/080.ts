import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルト雷エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[L]エネルギー1個ぶんとしてはたらく。このカードをつけている[L]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888352,
			},
		},
	],

	regulationMark: "J",
	rarity: "Rare",
};

export default card;
