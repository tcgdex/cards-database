import { Card } from "../../../interfaces"
import Set from "../SVC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霹靂電球"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "靠著翻滾身體來移動，如果地面凹凸不平，就會受到衝擊而爆炸。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "光彈"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "滾動"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card