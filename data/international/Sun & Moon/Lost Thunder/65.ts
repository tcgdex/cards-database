import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Popplio",
		'fr-fr': "Otaquin",
		'es-es': "Popplio",
		'it-it': "Popplio",
		'pt-br': "Popplio",
		'de-de': "Robball"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		728,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
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
			damage: 10,

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
		'en-us': "This Pokémon can control water bubbles. It practice diligently so it can learn to make big bubbles.",
	},

	thirdParty: {
		cardmarket: 365702,
		tcgplayer: 178874
	}
}

export default card
