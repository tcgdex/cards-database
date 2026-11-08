import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボチ"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	dexId: [971],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "人懐っこくて 寂しがり。 ちょっと かまっただけでも いつまでも 後を ついてくるぞ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "おはかであそぶ"
		},

		damage: "10×",

		effect: {
			'ja-jp': "自分のトラッシュにあるポケモンの枚数×10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693162,
				tcgplayer: 568313,
			},
		},
	],

	retreat: 2
}

export default card