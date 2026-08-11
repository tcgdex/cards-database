import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ミモザ"
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュからポケモンを5枚まで選び、相手に見せて、山札にもどして切る。その後、山札を3枚引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693180,
				tcgplayer: 568331,
			},
		},
	],

	trainerType: "Supporter"
}

export default card