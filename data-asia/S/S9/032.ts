import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴嚏熊"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "健康時鼻涕的黏度會變強。只要遇到自己討厭的對手， 就會把鼻涕擦到對方身上。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "寒意"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card