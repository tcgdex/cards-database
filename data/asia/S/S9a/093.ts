import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コトブキムラ"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札をすべて山札にもどして切ってよい。その場合、自分の山札を5枚引く。この効果を使ったなら、自分の番は終わる。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609861,
				tcgplayer: 570663,
			},
		},
	],

	trainerType: "Stadium"
}

export default card