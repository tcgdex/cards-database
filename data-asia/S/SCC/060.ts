import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈籠魚"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "在黑暗的海底，觸手上不斷閃爍的亮光是牠唯一的通訊手段。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電球"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card