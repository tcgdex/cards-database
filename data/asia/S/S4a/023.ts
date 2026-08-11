import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騰蹴小將"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "蓬鬆的體毛幫助牠增強了抵禦寒冷的能力，也使牠能夠使出溫度更高的火屬性招式。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蓄能焰襲"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【火】能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "增量踢"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card