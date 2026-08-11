import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "滴蛛"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "平時生活在水中，也會戴上水泡去陸地上尋找食物。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蟲咬"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card