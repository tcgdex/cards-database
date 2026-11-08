import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		333,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bind Wound",
				'fr-fr': "Blessure Pansée",
				'es-es': "Vendar Herida",
				'it-it': "Cura Ferite",
				'pt-br': "Ligar Ferida",
				'de-de': "Wunden verbinden"
			},
			effect: {
				'en-us': "Heal 20 damage from 1 of your Pokémon.",
				'fr-fr': "Soignez 20 dégâts à l'un de vos Pokémon.",
				'es-es': "Cura 20 puntos de daño a 1 de tus Pokémon.",
				'it-it': "Cura uno dei tuoi Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos de 1 dos seus Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It constantly grooms its cotton-like wings. It takes a shower to clean itself if it becomes dirty.",
	},

	thirdParty: {
		cardmarket: 286370,
		tcgplayer: 107243
	}
}

export default card
