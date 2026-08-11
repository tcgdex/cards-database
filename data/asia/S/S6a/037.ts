import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花蓓蓓"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		'zh-tw': "頭上的冠是收集花粉製成的，蘊藏著治癒的效果。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "目不轉睛"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card