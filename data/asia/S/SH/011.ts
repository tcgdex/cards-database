import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燒火蚣"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "會用滾燙的身體勒緊獵物，等到烤得恰到好處之時，就把牠們大口大口地吃掉。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火花"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card