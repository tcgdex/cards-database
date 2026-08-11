import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙河馬"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "張大嘴巴移動，連同沙子把對手一整個吞下去。會從鼻孔把沙子噴出來丟掉。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "雙重踩踏"
		},

		effect: {
			'zh-tw': "擲2次硬幣，增加正面出現的次數×30點傷害。"
		},

		damage: "70+",
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
