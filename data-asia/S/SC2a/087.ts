import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霜奶仙V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "嘩嘩糖雨"
		},

		effect: {
			'zh-tw': "將自己的所有備戰寶可夢各恢復「30」HP。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "甜蜜飛濺"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的【基礎】寶可夢，無法使用招式。"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
