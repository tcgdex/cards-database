import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咬咬龜"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card