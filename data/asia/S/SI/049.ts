import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡蒂狗"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "升溫"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【火】能量卡，附於自己的寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "烈焰"
		},

		damage: 30,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card