import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビーストエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは[無]エネルギー1個ぶんとしてはたらく。このカードは、自分の「ウルトラビースト」についているとき、すべてのタイプのエネルギー1個ぶんとしてはたらき、このカードをつけている「ウルトラビースト」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551231,
			},
		},
	],

	rarity: "Rare Holo",
};

export default card;
