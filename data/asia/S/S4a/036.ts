import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓋歐卡"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "據說會用降下大雨的能力擴張海洋。一直沉睡在海溝的底部。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "奇幻巨浪"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到80點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Lightning", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card