import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre"
	},

	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		1,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 2,

	description: {
		en: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
