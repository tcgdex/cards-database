import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ジェットエネルギー"
	},

	category: "Energy",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードを手札からベンチポケモンにつけたとき、このカードをつけたポケモンを、バトルポケモンと入れ替える。"
	},

	energyType: "Special",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788067,
				tcgplayer: 579476,
			},
		},
	],

	rarity: "None"
}

export default card