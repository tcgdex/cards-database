import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ボタン"
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		ja: "自分の場のたねポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693066,
				tcgplayer: 567217,
			},
		},
	],

	trainerType: "Supporter"
}

export default card