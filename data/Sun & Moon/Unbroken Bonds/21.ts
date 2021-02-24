import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		58,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Live Coal",
				fr: "Charbon Mutant",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
