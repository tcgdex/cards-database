import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Gardevoir VMAX",
		'fr-fr': "Gardevoir VMAX",
		'es-es': "Gardevoir VMAX",
		'it-it': "Gardevoir VMAX",
		'pt-br': "Gardevoir VMAX",
		'de-de': "Guardevoir VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [282],
	set: Set,
	hp: 320,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gardevoir V",
		'fr-fr': "Gardevoir-V"
	},

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Max Cure",
				'fr-fr': "Soignomax",
				'es-es': "Maxicura",
				'it-it': "Dynacura",
				'pt-br': "Cura Max",
				'de-de': "Dyna-Heilung"
			},
			effect: {
				'en-us': "Heal 50 damage from this Pokémon.",
				'fr-fr': "Soignez 50 dégâts de ce Pokémon.",
				'es-es': "Cura 50 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 50 danni.",
				'pt-br': "Cure 50 pontos de dano deste Pokémon.",
				'de-de': "Heile 50 Schadenspunkte bei diesem Pokémon."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 500235,
		tcgplayer: 223075
	}
}

export default card
