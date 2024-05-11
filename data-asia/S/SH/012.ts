import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焚焰蚣"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "性情極具攻擊性。危險的不只是牠燒燙的身體，大大的獠牙也銳利無比。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吐火"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "高溫爆破"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card