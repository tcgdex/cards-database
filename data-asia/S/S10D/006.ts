import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 裙兒小姐"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "據考察，雪山深處的棲息環境為其帶來了發達的腳力。會從頭冠般的 花中發出鼓舞周遭夥伴的香氣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "龍捲風勾手跳"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到20點傷害。將這隻寶可夢與備戰寶可夢互換。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "綠葉舞步"
		},

		damage: 100,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card