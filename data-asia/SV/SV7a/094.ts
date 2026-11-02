import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジェットエネルギー"
	},

	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードを手札からベンチポケモンにつけたとき、このカードをつけたポケモンを、バトルポケモンと入れ替える。"
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