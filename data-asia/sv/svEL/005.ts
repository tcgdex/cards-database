import { Card } from "../../../interfaces"
import Set from "../svEL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "呆火鱷"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "會躺在溫熱的岩石上，用四角形的鱗片所吸收的 熱能來製造火之能量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火種"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "衝撞"
		},

		damage: 30,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card