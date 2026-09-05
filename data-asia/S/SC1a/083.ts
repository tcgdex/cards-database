import { Card } from "../../../interfaces"
import Set from "../SC1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小炭仔"
	},

	dexId: [837],
	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "大約４００年前在煤礦坑中被人們發現。身體絕大部分的成分都和煤炭相同。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card