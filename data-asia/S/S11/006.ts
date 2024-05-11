import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長鼻葉"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "棲息在森林深處。會用頭上的葉子做成笛子， 吹出令人感到不安的音色。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "推倒"
		},

		effect: {
			'zh-tw': "若希望，將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card