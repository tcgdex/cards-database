import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボタン"
	},

	illustrator: "OKACHEKE",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のたねポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693071,
				tcgplayer: 567222,
			},
		},
	],

	trainerType: "Supporter"
}

export default card