import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡蒂狗"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "能毫不畏懼地去對抗比自己更強更大的對手。性格非常勇敢可靠。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火焰"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "衝撞"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card