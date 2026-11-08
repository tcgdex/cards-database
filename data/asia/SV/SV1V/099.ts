import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ペパー"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から「グッズ」と「ポケモンのどうぐ」を1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693174,
				tcgplayer: 568325,
			},
		},
	],

	trainerType: "Supporter"
}

export default card