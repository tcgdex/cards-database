import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴噬龜"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "性情凶暴的寶可夢。會用能咬斷鐵棍的顎部大口咬住獵物。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "虎鉗咬"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。"
		},

		damage: "60+",
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "緊咬不放"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card