import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴鯉龍"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'zh-tw': "性情非常凶暴。從嘴裡發出的破壞光線能夠將一切燃燒殆盡。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "砸碎"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "大風暴"
		},

		effect: {
			'zh-tw': "將場上的競技場卡丟棄。"
		},

		damage: 200,
		cost: ["Water", "Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
