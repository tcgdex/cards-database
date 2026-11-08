import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		769,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Absorb Life",
				'fr-fr': "Absorption",
				'es-es': "Absorber Vida",
				'it-it': "Spolpavita",
				'pt-br': "Drenagem de Vida",
				'de-de': "Lebensverkoster"
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
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Born from a sand mound playfully built by a child, this Pokémon embodies the grudges of the departed.",
	},

	thirdParty: {
		cardmarket: 299465,
		tcgplayer: 138543
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
