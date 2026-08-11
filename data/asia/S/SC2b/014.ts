import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 達摩狒狒"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "原本已經退化的火囊因憤怒而重生。在所到之處胡亂噴火大鬧一番。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "頭錘"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "凍結高溫"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢身上附加的【水】能量全部丟棄。這個情況下，增加60點傷害。"
		},

		damage: "110+",
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
