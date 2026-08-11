import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ネストボール"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693073,
				tcgplayer: 567224,
			},
		},
	],

	trainerType: "Item"
}

export default card