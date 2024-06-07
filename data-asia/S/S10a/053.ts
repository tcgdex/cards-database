import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黏黏寶"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		'zh-tw': "藏身在濕度較高的樹蔭下。覆蓋著身體的黏糊液體一旦 乾枯，就會立刻失去生命力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "溶解"
		},

		damage: 30,
		cost: ["Water", "Metal"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card