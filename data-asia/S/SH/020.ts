import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小貓怪"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'zh-tw': "一旦感知到危險，全身的體毛就會發光，趁對手眼睛被閃到時逃之夭夭。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "電氣之爪"
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