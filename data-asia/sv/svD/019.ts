import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火神蛾"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "燃燒的身體在炎熱之地備受嫌棄，但在寒冷之地 卻被信奉為太陽的化身。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火焰纏身"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張「基本【火】能量」卡，附於這隻寶可夢身上。"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "高溫爆破"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card