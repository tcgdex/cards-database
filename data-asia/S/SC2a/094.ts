import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "臭泥"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "主要的食物是工廠排放的污泥廢液。最近數量減少了。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踩落"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "污泥旋渦"
		},

		damage: 50,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
