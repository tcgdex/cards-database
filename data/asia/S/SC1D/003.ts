import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毒薔薇"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "只要聞到牠的花香，就能放鬆心情。濃郁的香味是毒薔薇有活力的證明。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "甜甜香氣"
		},

		effect: {
			'zh-tw': "選擇自己的1隻寶可夢，恢復「30」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "刺刺痛痛"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
