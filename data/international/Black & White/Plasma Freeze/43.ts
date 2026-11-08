import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran♂",
		'es-es': "Nidoran♂",
		'it-it': "Nidoran♂",
		'pt-br': "Nidoran♂",
		'de-de': "Nidoran♂"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hit Back",
				'fr-fr': "Réplique",
			},
			effect: {
				'en-us': "If this Pokémon has no damage counters on it, this attack does nothing.",
				'fr-fr': "Si ce Pokémon n'a aucun marqueur de dégâts, cette attaque ne fait rien.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "It scans its surroundings by raising its ears out of the grass. Its toxic horn is for protection.",
	},
}

export default card
