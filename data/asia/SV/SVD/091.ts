import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "老翁龍"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'zh-tw': "心地善良愛親近人，但只要生氣就會 颳起強風吹倒一切。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "逆鱗"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card