import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獨角蟲"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "有著非常靈敏的嗅覺。能用大大的紅鼻子聞出自己喜歡吃和不喜歡吃的葉子。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蟲之預見"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【草】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
