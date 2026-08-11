import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Bellsprout",
		'fr-fr': "Chétiflor",
		'es-es': "Bellsprout",
		'it-it': "Bellsprout",
		'pt-br': "Bellsprout",
		'de-de': "Knofensa"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		69,
	],

	hp: 60,

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
				'en-us': "Blot",
				'fr-fr': "Pâté",
				'es-es': "Absorción",
				'it-it': "Macchia",
				'pt-br': "Borrão",
				'de-de': "Klecks"
			},
			effect: {
				'en-us': "Heal 10 damage from this Pokémon.",
				'fr-fr': "Soignez 10 dégâts à ce Pokémon.",
				'es-es': "Cura 10 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 10 danni.",
				'pt-br': "Cure 10 pontos de dano deste Pokémon.",
				'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

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
		'en-us': "Its bud looks like a human face. Because of the bud, it is rumored to be a type of legendary mandrake plant.",
	},

	thirdParty: {
		cardmarket: 361248,
		tcgplayer: 170806
	}
}

export default card
