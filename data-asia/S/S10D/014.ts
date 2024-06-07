import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨翅飛魚"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "性情溫和，悠游於大海之中。 游泳速度增快時會躍出海面， 人們常將其誤認為鳥寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "搬上岸"
		},

		effect: {
			'zh-tw': "從自己或者對手的棄牌區選擇1張【基礎】寶可夢卡，放置於持有人的備戰區。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "水之刀鋒"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card