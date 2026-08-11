import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白蓬蓬"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "太陽之風"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「20」HP。"
		},

		damage: 50,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card