import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Arceus",
		'fr-fr': "Arceus"
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		493,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Type Switch",
				'fr-fr': "Échange de Type"
			},
			effect: {
				'en-us': "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy, or Dragon type. Until the end of your next turn, this Pokémon is that type.",
				'fr-fr': "Choisissez le type , , , , , , , ,  ou . Jusqu'à la fin de votre prochain tour, ce Pokémon est de ce type."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Blast",
				'fr-fr': "Violente Déflagration"
			},
			effect: {
				'en-us': "Discard an Energy card attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It is told in mythology that this Pokémon was born before the universe even existed.",
	},

	thirdParty: {
		cardmarket: 289806
	}
}

export default card
