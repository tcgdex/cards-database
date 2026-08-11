import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咚咚鼠"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "用尾巴從發電廠或民宅的插座吸取電力，並從鬍鬚放出電擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "瘋狂派對"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的，持有「瘋狂派對」招式的寶可夢的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
