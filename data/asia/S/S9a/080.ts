import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シマボシ"
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		'ja-jp': "コインを2回投げ、オモテの数ぶんまで、自分のトラッシュから好きなカードを選び、相手に見せて、好きな順番に入れ替えて、山札の上にもどす。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609848,
				tcgplayer: 570650,
			},
		},
	],

	trainerType: "Supporter"
}

export default card