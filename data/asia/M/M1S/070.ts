import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エリキテル"
	},
	illustrator: "Akira Komayama",
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
			type: "holo",
			thirdParty: {
				cardmarket: 840629,
				tcgplayer: 647282,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [694]
}

export default card
