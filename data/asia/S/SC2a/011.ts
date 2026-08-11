import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "派拉斯特"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "大大的蘑菇操縱著派拉斯特。經常和燈罩夜菇爭奪地盤。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蘑菇衝撞"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "日光束"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
