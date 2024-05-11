import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藍鱷"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "一旦咬住，除非牙齒脫落，否則絕不會鬆口。脫落的牙齒馬上就能再長出來。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "飛濺"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "衝浪"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card