import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "猴怪"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "只要有１隻發怒，周圍的猴怪也會跟著開始發起怒來，所以猴怪群從沒有一刻是安靜的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "真氣突刺"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card