import Set from "."
import { Card } from "../../../interfaces"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈籠魚"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "從鰭變化而來的觸手之中，分別流通著正電以及負電。"
	},

	stage: "Basic",

	attacks: [{
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

	retreat: 1,
	regulationMark: "D"
}

export default card
