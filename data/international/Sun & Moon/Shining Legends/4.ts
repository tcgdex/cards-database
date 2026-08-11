import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'es-es': "Shroomish",
		'it-it': "Shroomish",
		'pt-br': "Shroomish",
		'de-de': "Knilz"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		285,
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
				"Colorless",
			],
			name: {
				'en-us': "Absorb",
				'fr-fr': "Vol-Vie",
				'es-es': "Absorber",
				'it-it': "Assorbimento",
				'pt-br': "Absorção",
				'de-de': "Absorber"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 pontos de dano deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
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
		'en-us': "It prefers damp places. By day it remains still in the forest shade. It releases toxic powder from its head.",
	},

	thirdParty: {
		cardmarket: 302142,
		tcgplayer: 146656
	}
}

export default card
