import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
		'es-es': "Karrablast",
		'it-it': "Karrablast",
		'pt-br': "Karrablast",
		'de-de': "Laukaps"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		588,
	],

	hp: 70,

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
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'es-es': "Derribo",
				'it-it': "Riduttore",
				'pt-br': "Desmantelar",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
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

	retreat: 2,

	description: {
		'en-us': "These mysterious Pokémon evolve when they receive electrical stimulation while they are in the same place as Shelmet.",
	},

	thirdParty: {
		cardmarket: 387892,
		tcgplayer: 194928
	}
}

export default card
