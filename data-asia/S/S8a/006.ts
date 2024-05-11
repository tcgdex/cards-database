import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "固拉多"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "與蓋歐卡殊死戰鬥後，便一直沉睡著。被稱為大地化身的傳說的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "熔岩火山"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方5張卡丟棄，造成其中的能量卡的張數×80點傷害。"
		},

		damage: "80×",
		cost: ["Fighting", "Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "大切斷"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card