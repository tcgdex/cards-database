import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶貝龍"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'zh-tw': "也有說法是，牠會藉由用力地撞擊頭部來刺激影響進化的細胞。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "頭錘"
		},

		damage: 30,
		cost: ["Fire", "Water"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card