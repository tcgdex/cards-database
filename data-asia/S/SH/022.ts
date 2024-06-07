import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "倫琴貓"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'zh-tw': "倫琴貓的透視能力在發現危險事物時非常有幫助。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "閃電爪"
		},

		damage: 90,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card