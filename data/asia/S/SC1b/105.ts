import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "不良蛙"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "會從自己臉頰上的毒囊發出聲音來威嚇對手，趁對手畏懼的時候使出毒擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踩"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞倒"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
