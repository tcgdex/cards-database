import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "椰蛋樹"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "３顆頭都想著不同的事。對自己以外的事情 似乎都沒什麼興趣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "超級吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "種子炸彈"
		},

		damage: 130,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card