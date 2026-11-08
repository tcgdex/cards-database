import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Draining Kiss",
				'fr-fr': "Vampibaiser",
				'es-es': "Beso Drenaje",
				'it-it': "Assorbibacio",
				'pt-br': "Beijo Drenante",
				'de-de': "Diebeskuss"
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
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If its horns capture the warm feelings of people or Pokémon, its body warms up slightly.",
	},

	thirdParty: {
		cardmarket: 299493,
		tcgplayer: 138583
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
