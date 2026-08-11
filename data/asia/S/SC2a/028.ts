import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "甜舞妮"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "像跳舞那樣轉圈，釋放出甜甜的香氣。聞到那香氣便會感到幸福。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "誘惑"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "掌擊"
		},

		damage: 40,
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
