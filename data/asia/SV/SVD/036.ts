import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小磁怪"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "從左右兩邊的組件發出的電磁波能阻礙重力， 使牠浮在空中。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "高速球"
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