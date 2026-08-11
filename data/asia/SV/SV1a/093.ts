import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "クラベル"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から、HPが「120」以下のたねポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701555,
				tcgplayer: 568216,
			},
		},
	],

	trainerType: "Supporter"
}

export default card