import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
		'es-es': "Tympole",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'de-de': "Schallquap"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		535,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale Épuisante"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They warn other of danger by vibrating their cheeks to create a high-pitched sound.",
	},

	thirdParty: {
		cardmarket: 280359,
		tcgplayer: 90089
	}
}

export default card
