import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Frillish",
		'fr-fr': "Viskuse",
		'es-es': "Frillish",
		'it-it': "Frillish",
		'pt-br': "Frillish",
		'de-de': "Quabbel"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		592,
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
				"Colorless",
			],
			name: {
				'en-us': "Absorb",
				'fr-fr': "Vol-Vie",
			},
			effect: {
				'en-us': "Heal 10 damage from this Pokémon.",
				'fr-fr': "Soignez 10 dégâts à ce Pokémon.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If its veil-like arms stun and wrap a foe, that foe will be dragged miles below the surface, never to return.",
	},

	thirdParty: {
		cardmarket: 280778,
		tcgplayer: 85566
	}
}

export default card
