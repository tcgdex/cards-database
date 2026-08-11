import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スター団のしたっぱ"
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のバトルポケモンについているエネルギーを1個選び、相手の山札の上にもどす。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693064,
				tcgplayer: 567215,
			},
		},
	],

	trainerType: "Supporter"
}

export default card