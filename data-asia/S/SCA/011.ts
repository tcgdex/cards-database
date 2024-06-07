import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡蒂狗"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "能毫不畏懼地去對抗比自己更強更大的對手。性格非常勇敢可靠。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "氣味偵測"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則從自己的棄牌區任意選擇1張卡，在給對手看過後加入手牌。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "火之爪"
		},

		damage: 60,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card