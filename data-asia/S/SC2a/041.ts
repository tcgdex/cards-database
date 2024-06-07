import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "醜醜魚"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		'zh-tw': "外表醜陋，所以不受歡迎。擁有驚人的生命力，因而成為了研究對象。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "小憩"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「20」HP。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
