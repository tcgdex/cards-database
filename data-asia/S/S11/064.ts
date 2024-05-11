import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噬沙堡爺"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "也被稱為「海灘惡夢」。會操控沙子淹沒獵物， 然後吸取對方的靈魂。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "沙壺地獄"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "大地粉碎"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card