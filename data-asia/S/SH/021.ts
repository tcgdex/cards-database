import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勒克貓"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "在銳利的爪子尖端有強烈的電流流過，只要稍微擦到，就能讓對手暈厥。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電氣之爪"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card