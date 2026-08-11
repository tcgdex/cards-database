import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小木靈"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "在森林中迷路死去的孩子的魂魄附在樹樁上，轉生成了寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "黑暗導引"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【基礎】寶可夢卡，放置於備戰區。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "種子炸彈"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
