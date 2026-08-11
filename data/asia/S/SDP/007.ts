import { Card } from "../../../interfaces"
import Set from "../SDP"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "傘電蜥"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "擁有太陽能發電的結構。如果有人打擾牠發電， 牠就會因心理壓力而衰弱。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "電球"
		},

		damage: 20,
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