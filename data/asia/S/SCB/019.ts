import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "薩戮德"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "生長在身上的藤蔓斷落後會化為土壤的養分，孕育森林裡的各種植物。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸附青藤"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "叢林轟炸"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card