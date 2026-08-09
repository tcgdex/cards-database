import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルミナスエネルギー"
	},

	illustrator: "5ban Graphics",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンに、このカード以外の特殊エネルギーがついているなら、エネルギー1個ぶんとしてはたらく。"
	},

	energyType: "Special",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761556,
				tcgplayer: 566151,
			},
		},
	],
}

export default card