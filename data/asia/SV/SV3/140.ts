import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボウルタウン"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札からたねポケモン（「ルールを持つポケモン」をのぞく）を1枚選び、ベンチに出してよい。そして山札を切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 724996,
				tcgplayer: 567094,
			},
		},
	],

	trainerType: "Stadium"
}

export default card