import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "尖牙陸鯊"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "會從頭部左右兩側的突起處發出超音波，藉此調查漆黑 洞窟裡的狀況。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "龍爪"
		},

		damage: 70,
		cost: ["Water", "Fighting"]
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card