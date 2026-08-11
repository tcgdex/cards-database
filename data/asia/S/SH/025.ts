import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "猴怪"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "只要有１隻發怒，周圍的猴怪也會跟著開始發起怒來，所以猴怪群從沒有一刻是安靜的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "抓"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card