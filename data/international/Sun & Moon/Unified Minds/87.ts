import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Cresselia",
		'fr-fr': "Cresselia",
		'es-es': "Cresselia",
		'it-it': "Cresselia",
		'pt-br': "Cresselia",
		'de-de': "Cresselia"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		488,
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
				'en-us': "Aurora Gain",
				'fr-fr': "Puissance Boréale",
				'es-es': "Ganar Aurora",
				'it-it': "Prendiaurora",
				'pt-br': "Aurora",
				'de-de': "Aurora-Verstärkung"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Luminous Blade",
				'fr-fr': "Lame Lumineuse",
				'es-es': "Cuchilla Brillante",
				'it-it': "Lamalucente",
				'pt-br': "Lâmina Luminosa",
				'de-de': "Leuchtende Klinge"
			},
			effect: {
				'en-us': "Discard a Psychic Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie Psychic de ce Pokémon.",
				'es-es': "Descarta 1 Energía Psychic de este Pokémon.",
				'it-it': "Scarta un’Energia Psychic assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia Psychic deste Pokémon.",
				'de-de': "Lege 1 Psychic-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Shiny particles are released from its wings like a veil. It is said to represent the crescent moon.",
	},

	thirdParty: {
		cardmarket: 388242,
		tcgplayer: 195019
	}
}

export default card
