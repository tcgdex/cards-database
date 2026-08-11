import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "サワロ"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモンを2匹まで選び、HPをそれぞれ「50」回復する。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707708,
				tcgplayer: 565957,
			},
		},
	],

	trainerType: "Supporter"
}

export default card