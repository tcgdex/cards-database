import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Fire",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Bite",
			fr: "Morsure"
		},
		damage: 10
	}, {
		cost: [
			"Fire",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Flame Tail",
			fr: "Queue de flammes"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Water",
			value: "2x"
		},
	],

	retreat: 2,
}

export default card
