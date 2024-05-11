import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小仙奶"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'zh-tw': "空氣中甜甜香氣的成分集中之後誕生。身體由鮮奶油構成。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "芳香治療"
		},

		effect: {
			'zh-tw': "將自己的所有寶可夢各恢復「10」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card