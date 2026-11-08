import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ルチアのアピール"
	},

	illustrator: "Nobusawa/Mochipuyo",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のベンチのたねポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをこんらんにする。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788064,
				tcgplayer: 579473,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None"
}

export default card