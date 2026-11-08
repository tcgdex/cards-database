import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ジニア"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から進化ポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693070,
				tcgplayer: 567221,
			},
		},
	],

	trainerType: "Supporter"
}

export default card