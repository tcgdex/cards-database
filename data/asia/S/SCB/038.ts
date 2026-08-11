import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "浮潛鼬"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "在追逐水中獵物的過程中，浮囊變得更加發達。可以像橡皮艇一樣讓人乘坐。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "衝浪"
		},

		damage: 50,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card