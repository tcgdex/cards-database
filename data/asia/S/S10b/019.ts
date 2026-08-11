import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "呆呆獸"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "呆頭呆腦而且遲鈍。尾巴被吃掉也不會感到疼痛，甚至不會發現它又長出來了。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "紋絲不動"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "釣魚日"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張物品卡，在給對手看過後加入手牌。"
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card