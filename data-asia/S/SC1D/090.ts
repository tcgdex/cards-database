import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天秤偶"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "用單腳一邊旋轉一邊移動。有時候也能看到顛倒過來旋轉的天秤偶。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
