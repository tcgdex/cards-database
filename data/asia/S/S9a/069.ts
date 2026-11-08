import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シャンデラ"
	},

	illustrator: "chibi",
	category: "Pokemon",
	dexId: [609],
	hp: 150,
	types: ["Fire"],

	description: {
		'ja-jp': "古びた 洋館に 棲みつく。 腕の 炎を 妖しく 揺らし 相手を 催眠に かけるぞ。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "やまあぶり"
		},

		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の山札を上から3枚トラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'ja-jp': "ヒートブラスト"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609837,
				tcgplayer: 570639,
			},
		},
	],

	retreat: 2,
}

export default card