import { Card } from "../../../interfaces"
import Set from "../SC1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "強顎雞母蟲"
	},

	dexId: [736],
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "強顎雞母蟲大大的顎部擁有能夠折斷粗壯樹枝的威力。連天敵稚山雀都會因此逃跑。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card