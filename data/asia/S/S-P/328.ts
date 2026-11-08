import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダブルターボエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[C]エネルギー2個ぶんとしてはたらく。このカードをつけているポケモンが使うワザの、相手のポケモンへのダメージは「-20」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 675890,
				tcgplayer: 597501,
			},
		},
	],

	regulationMark: "F",
	rarity: "Promo",
};

export default card;
