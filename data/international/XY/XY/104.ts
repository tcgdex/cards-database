import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'it-it': "Skitty",
		'pt-br': "Skitty",
		'de-de': "Eneco"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		300,
	],

	hp: 50,

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
				'en-us': "Heal Bell",
				'fr-fr': "Glas de Soin",
				'es-es': "Campana Cura",
				'it-it': "Rintoccasana",
				'pt-br': "Sino da Cura",
				'de-de': "Vitalglocke"
			},
			effect: {
				'en-us': "Heal 10 damage from each of your Pokémon.",
				'fr-fr': "Soignez 10 dégâts à chacun de vos Pokémon.",
				'es-es': "Cura 10 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Cura ciascuno dei tuoi Pokémon da 10 danni.",
				'pt-br': "Cure 10 de danos de cada um dos seus Pokémon.",
				'de-de': "Heile 10 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Whap",
				'fr-fr': "Queue Battoir",
				'es-es': "Coletón",
				'it-it': "Codabotta",
				'pt-br': "Surra de Cauda",
				'de-de': "Schweifvertrimmer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can't stop itself from chasing moving things, and it runs in a circle, chasing its own tail.",
	},

	thirdParty: {
		cardmarket: 281441,
		tcgplayer: 89271
	}
}

export default card
