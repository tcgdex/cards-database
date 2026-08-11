import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪吞蟲"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰之呼喚"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【水】能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card