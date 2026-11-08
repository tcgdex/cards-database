import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エリキテル"
	},
	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	description: {
		'ja-jp': "太陽発電の仕組みをもつ。発電をじゃまされるとストレスで弱ってしまう。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			'ja-jp': "ダブルひっかき"
		},
		damage: "10×",
		effect: {
			'ja-jp': "コインを2回投げ、オモテの数×10ダメージ。"
		},
		cost: ["Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840590,
				tcgplayer: 647281,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [694]
}

export default card
