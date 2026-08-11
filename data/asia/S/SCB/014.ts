import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘭螳花"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "斬斷敵人的動作就像是跳舞一般。優雅的姿態使得牠被稱為最豔麗的草屬性寶可夢。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "綠葉吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "日光刀"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card