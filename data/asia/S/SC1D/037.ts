import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨翅飛魚"
	},

	illustrator: "Jumpei Akasaka",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "游動時速度上來後，甚至會從波浪上飛起來，然後就這樣滑翔１００公尺。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "積水"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張【水】能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "飛濺"
		},

		damage: 60,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
