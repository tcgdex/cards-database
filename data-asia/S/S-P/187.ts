import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "向日種子"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "只飲用積在葉子背面的朝露來過活。據說除此之外什麼都不吃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "種子炸彈"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card