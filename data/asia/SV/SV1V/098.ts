import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "博士の研究（フトゥー博士）"
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべてトラッシュし、山札を7枚引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693173,
				tcgplayer: 568324,
			},
		},
	],

	trainerType: "Supporter"
}

export default card