import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネモのリュック"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから「ネモ」を2枚まで選び、相手に見せて、手札に加える。"
	},

	trainerType: "Item",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746542,
				tcgplayer: 567561,
				cardtrader: 269774,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577391,
			},
		},
	]
}

export default card
