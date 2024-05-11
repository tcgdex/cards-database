import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡璞・鳴鳴V"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "電球"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "螺旋雷電"
		},

		effect: {
			'zh-tw': "增加對手的場上寶可夢身上附加的能量的數量×40點傷害。"
		},

		damage: "20+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card