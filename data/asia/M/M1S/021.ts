import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メッソン"
	},
	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	description: {
		'ja-jp': "口から吹き出す水の弾で木の実を撃ち落として食べる。狙いは百発百中だ。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			'ja-jp': "ふいをつく"
		},
		damage: 30,
		effect: {
			'ja-jp': "コインを1回投げウラなら、このワザは失敗。"
		},
		cost: ["Water"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840572,
				tcgplayer: 647208,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [816]
}

export default card
