import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪笠怪"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "推擊"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "冰柱飛彈"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card