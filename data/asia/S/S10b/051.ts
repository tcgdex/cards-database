import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吉利蛋"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "牠的蛋不僅營養豐富，而且非常美味。因此被視為是高級的食材。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "美味蛋"
		},

		effect: {
			'zh-tw': "選擇自己的1隻備戰寶可夢，恢復「30」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "重摑"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card