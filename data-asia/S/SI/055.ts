import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎帝"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "高溫衝刺"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇1張【火】能量卡，附於這隻寶可夢身上。"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火焰牙"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 90,
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