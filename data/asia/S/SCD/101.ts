import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊裴爾塔爾"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "暗黑利刃"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"]
	}, {
		name: {
			'zh-tw': "一擊之翼"
		},

		damage: 110,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card