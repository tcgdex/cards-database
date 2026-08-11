import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咩利羊"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "摩擦體毛就能儲存靜電。儲存的電力越多，尾巴前端的燈泡就會越亮。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈哩啪啦"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
