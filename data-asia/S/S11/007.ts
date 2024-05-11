import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狡猾天狗"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		'zh-tw': "過去被視為森林之神而受到畏懼的寶可夢。有著讀取對手想法並 搶先一步行動的能力。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "圓扇龍捲風"
		},

		effect: {
			'zh-tw': "若希望，將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		},

		damage: 50,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "毀壞陣風"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與附加的卡，全部放置於放逐區。"
		},

		damage: 210,
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