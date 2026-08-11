import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Chespin",
		'fr-fr': "Marisson",
		'es-es': "Chespin",
		'it-it': "Chespin",
		'pt-br': "Chespin",
		'de-de': "Igamaro"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		650,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nosh",
				'fr-fr': "Casse-Croûte",
				'es-es': "Piscolabis",
				'it-it': "Spuntino",
				'pt-br': "Mordiscar",
				'de-de': "Snack"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon Graine",
				'es-es': "Bomba Germen",
				'it-it': "Semebomba",
				'pt-br': "Bomba de Sementes",
				'de-de': "Samenbomben"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Such a thick shell of wood covers its head and back that even a direct hit from a truck wouldn't faze it.",
	},

	thirdParty: {
		cardmarket: 286253,
		tcgplayer: 107126
	}
}

export default card
