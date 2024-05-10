import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓鼬斬"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "和飯匙蛇是死對頭。一旦撞見彼此，就會立刻 張開前腳的爪子來威嚇對方。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card