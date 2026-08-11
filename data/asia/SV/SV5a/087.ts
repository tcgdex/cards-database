import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "サザレ"
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札からポケモンを2枚まで選び、相手に見せて、山札にもどす。その後、もどした枚数ぶんまで、自分の山札からポケモンを選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761547,
				tcgplayer: 566142,
			},
		},
	],

	trainerType: "Supporter"
}

export default card