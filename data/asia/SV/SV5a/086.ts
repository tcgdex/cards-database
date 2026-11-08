import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゴヨウ"
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、それぞれ自分の手札をすべてウラにして切り、山札の下にもどす。その後、おたがいのプレイヤーは、それぞれコインを1回投げ、オモテなら6枚、ウラなら3枚、山札を引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761546,
				tcgplayer: 566141,
			},
		},
	],

	trainerType: "Supporter"
}

export default card