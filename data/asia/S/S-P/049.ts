import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スピード雷エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[雷]エネルギー1個ぶんとしてはたらく。このカードを手札から[雷]ポケモンにつけたとき、自分の山札を2枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597269,
			},
		},
	],

	regulationMark: "D",
	rarity: "Promo",
};

export default card;
