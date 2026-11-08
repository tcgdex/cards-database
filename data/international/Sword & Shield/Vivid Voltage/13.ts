import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [290],

	name: {
		'en-us': "Nincada",
		'fr-fr': "Ningale",
		'es-es': "Nincada",
		'it-it': "Nincada",
		'pt-br': "Nincada",
		'de-de': "Nincada"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 40,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Absorb",
				'fr-fr': "Vole-Vie",
				'es-es': "Absorber",
				'it-it': "Assorbimento",
				'pt-br': "Absorção",
				'de-de': "Absorber"
			},
			effect: {
				'en-us': "Heal 10 damage from this Pokémon.",
				'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
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
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Because it lived almost entirely underground, it is nearly blind. It uses its antennae instead."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511485,
				tcgplayer: 226376
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511485,
				tcgplayer: 226376
			}
		},
	],
}

export default card
