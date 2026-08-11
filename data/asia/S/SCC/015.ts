import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幼棉棉"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "會隨著微風一邊轉圈圈一邊愉快地唱歌。許多人因為喜歡這可愛的模樣而培育牠。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸取一下"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「10」HP。"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card