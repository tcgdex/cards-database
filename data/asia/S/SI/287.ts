import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詐唬魔"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "踢飛"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "突刺"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card