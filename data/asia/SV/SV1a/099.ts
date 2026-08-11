import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キハダ"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札を1枚選び、山札の下にもどす。その後、自分の手札が5枚になるように、山札を引く。（自分の手札がこのカード1枚だけなら、このカードは使えない。）"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701563,
				tcgplayer: 568222,
			},
		},
	],

	trainerType: "Supporter"
}

export default card