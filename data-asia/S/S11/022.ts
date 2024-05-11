import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "墨海馬"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'zh-tw': "棲息在海流平穩的海域。被襲擊時會吐出漆黑的 墨汁，然後趁機逃走。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "逆向噴射"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card