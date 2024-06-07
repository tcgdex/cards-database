import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰砌鵝"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "無論何時都用冰塊冰鎮著自己怕熱的臉。會把頭頂上的毛垂到海裡釣食物吃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雪花冰"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "冰塊頭"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。"
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card