import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火神蛾V"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "翻騰火焰"
		},

		effect: {
			'zh-tw': "在給對手看過自己的棄牌區的所有基本能量卡後，增加其張數×20點傷害。然後，將給對手看過的能量卡放回牌庫並重洗。"
		},

		damage: "20+",
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "大字爆炎"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 160,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card