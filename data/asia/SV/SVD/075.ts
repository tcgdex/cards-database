import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焰后蜥"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "會用妖豔的身姿誘惑被牠的毒瓦斯弄得頭昏眼花的對手， 使其變成自己忠實的僕人。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "瓦斯包圍"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "重摑"
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card