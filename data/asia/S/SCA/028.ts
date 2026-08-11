import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴噬龜"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "性情凶暴的寶可夢。會用能咬斷鐵棍的顎部大口咬住獵物。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "虎鉗波"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了「露璃娜」，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "衝浪"
		},

		damage: 140,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card