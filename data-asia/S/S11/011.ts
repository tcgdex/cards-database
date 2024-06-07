import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小木靈"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "在森林中迷路死去的孩子的魂魄附在樹樁上， 轉生成了寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鉤住"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card