import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小貓怪"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		'zh-tw': "能利用肌肉的伸縮來產生電流。當牠全身都在抖動時， 就代表牠正在激烈地發電。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card