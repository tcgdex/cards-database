import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈籠魚"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "從鰭變化而來的觸手之中，分別流通著 正電以及負電。"
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
			'zh-tw': "重摑"
		},

		damage: 20,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card