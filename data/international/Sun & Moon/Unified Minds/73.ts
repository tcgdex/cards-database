import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Six of them form a single Pokémon. Should one of the six be lost, the next morning there will once more be six.",
	},

	thirdParty: {
		cardmarket: 388177,
		tcgplayer: 195001
	}
}

export default card
