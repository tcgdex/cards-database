import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユニットエネルギー雷超鋼",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[雷][超][鋼]の3つのタイプのエネルギー1個ぶんとしてはたらく。ポケモンについていないなら、[無]エネルギー1個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551241,
			},
		},
	],

	rarity: "None",
};

export default card;
