import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白蓬蓬"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "用牠頭上的棉絮製成的線有著十分美麗動人的光澤，是伽勒爾地區的名產。"
	},

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