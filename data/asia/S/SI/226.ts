import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙河馬"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "泥巴射擊"
		},

		damage: 50,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card