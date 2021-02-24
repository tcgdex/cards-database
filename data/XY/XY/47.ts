import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Ekans",
		fr: "Abo",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		23,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
