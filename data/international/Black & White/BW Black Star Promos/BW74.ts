import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Giratina",
		'fr-fr': "Giratina",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		487,
	],
	hp: 130,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hex",
				'fr-fr': "Châtiment",
			},
			effect: {
				'en-us': "If the Defending Pokémon is affected by a Special Condition, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 50 dégâts supplémentaires",
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Claw",
				'fr-fr': "Griffe Ombre",
			},
			effect: {
				'en-us': "Discard a random card from your opponent's hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 3,




	description: {
		'en-us': "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
	},
}

export default card
