import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "強顎雞母蟲"
	},

	illustrator: "Tomokazu Komiya",
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