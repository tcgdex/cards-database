import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拳拳蛸"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "會為了尋找食物而登上陸地。擁有旺盛的好奇心，不管看到什麼，都會先用觸手打一打再說。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "敲擊"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "頭突"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card