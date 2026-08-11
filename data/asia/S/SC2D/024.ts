import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燒火蚣"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "靠儲存在體內的可燃氣體來發熱。熱度最高的是腹部的黃色部分。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "烈焰"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
