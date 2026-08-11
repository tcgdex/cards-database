import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火岩鼠"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "擁有一身絕不會被點燃的奇異體毛。 當牠背向己方時須特別小心， 這是牠將發動攻擊的信號。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "火焰"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card