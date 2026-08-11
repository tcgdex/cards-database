import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボスの指令（ゲーチス）"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701559,
				tcgplayer: 568218,
			},
		},
	],

	trainerType: "Supporter"
}

export default card