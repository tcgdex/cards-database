import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
		'es-es': "Sunkern",
		'it-it': "Sunkern",
		'pt-br': "Sunkern",
		'de-de': "Sonnkern"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		191,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leech Seed",
				'fr-fr': "Vampigraine",
				'es-es': "Drenadoras",
				'it-it': "Parassiseme",
				'pt-br': "Semente Sanguessuga",
				'de-de': "Egelsamen"
			},
			effect: {
				'en-us': "Heal 10 damage from this Pokémon.",
				'fr-fr': "Soignez 10 dégâts à ce Pokémon.",
				'es-es': "Cura 10 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 10 danni.",
				'pt-br': "Cure 10 pontos de dano deste Pokémon.",
				'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
			},
			damage: 10,

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
		'en-us': "It may plummet from the sky. If attacked by a Spearow, it will violently shake its leaves.",
	},

	thirdParty: {
		cardmarket: 407689,
		tcgplayer: 201153
	}
}

export default card
