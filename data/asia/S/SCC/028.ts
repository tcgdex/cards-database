import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎兔兒"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "一旦做好了戰鬥的準備，牠鼻頭上和腳底的肉球就會散發出極度的高溫。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭錘"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card