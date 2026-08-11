import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ビーストエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは[無]エネルギー1個ぶんとしてはたらく。このカードは、自分の「ウルトラビースト」についているとき、すべてのタイプのエネルギー1個ぶんとしてはたらき、このカードをつけている「ウルトラビースト」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544561,
			},
		},
	],

	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
