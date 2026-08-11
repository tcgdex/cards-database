import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "チェレンの気くばり"
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'ja-jp': "ダメカンがのっている自分のポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 606280,
				tcgplayer: 569743,
			},
		},
	],

	trainerType: "Supporter"
}

export default card