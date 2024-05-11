import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "恰雷姆"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "能用在瑜伽的修行中鍛鍊出來的精神力量預測對手的行動。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "戰鬥舞步"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【鬥】能量卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card