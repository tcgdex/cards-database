import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰砌鵝"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雪花冰"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "冰塊頭"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。"
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card