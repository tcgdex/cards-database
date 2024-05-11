import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圓陸鯊"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'zh-tw': "喜歡住在被地熱加溫的洞窟的小窄洞。這樣即使外面 刮著暴風雪，牠也不會受凍。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 30,
		cost: ["Water", "Fighting"]
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card