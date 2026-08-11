import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪怪"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'zh-tw': "會從尖刺的前端發出強力電擊。紅色核心裡填充著非常多的能量。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "光束"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "井井有條"
		},

		effect: {
			'zh-tw': "若自己的備戰區沒有「齒輪兒」「齒輪組」，則這個招式失敗。"
		},

		damage: 200,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
