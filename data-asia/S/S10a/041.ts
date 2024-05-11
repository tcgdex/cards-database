import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超音蝠"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],

	description: {
		'zh-tw': "會利用從口中發出的超音波探查周圍的狀況。在狹窄的 洞窟裡也能靈巧地飛來飛去。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card