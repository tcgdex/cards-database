import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "デンボク"
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札を1枚選び、残りの手札をすべてトラッシュする。その後、山札を4枚引く。（自分の手札がこのカード1枚だけなら、このカードは使えない。）"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609850,
				tcgplayer: 570652,
			},
		},
	],

	trainerType: "Supporter"
}

export default card