import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "六尾"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "隨著身體的成長，６根尾巴的毛髮也會變得更漂亮。緊緊抱著牠時能感到微微的溫暖。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火種"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card