import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小仙奶"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'zh-tw': "空氣中甜甜香氣的成分集中之後誕生。身體由鮮奶油構成。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "甜甜香氣"
		},

		effect: {
			'zh-tw': "選擇自己的1隻寶可夢，恢復「20」HP。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card