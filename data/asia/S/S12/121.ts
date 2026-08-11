import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スズナ"
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から7枚見て、その中からポケモンとエネルギーを好きなだけ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680855,
				tcgplayer: 570179,
			},
		},
	],

	trainerType: "Supporter"
}

export default card