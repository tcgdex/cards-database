import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "六尾"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "隨著身體的成長，６根尾巴的毛髮也會變得更漂亮。緊緊抱著牠時能感到微微的溫暖。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踢飛"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card