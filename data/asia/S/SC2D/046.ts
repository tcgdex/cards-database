import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電電蟲"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		'zh-tw': "會附在寶可夢的身上吸收靜電。自身並沒有製造電的能力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蟲咬"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
