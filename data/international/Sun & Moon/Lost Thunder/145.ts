import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Cutiefly",
		'fr-fr': "Bombydou",
		'es-es': "Cutiefly",
		'it-it': "Cutiefly",
		'pt-br': "Cutiefly",
		'de-de': "Wommel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		742,
	],

	hp: 30,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sweet Scent",
				'fr-fr': "Doux Parfum",
				'es-es': "Dulce Aroma",
				'it-it': "Profumino",
				'pt-br': "Aroma Doce",
				'de-de': "Lockduft"
			},
			effect: {
				'en-us': "Heal 30 damage from 1 of your Pokémon.",
				'fr-fr': "Soignez 30 dégâts à l’un de vos Pokémon.",
				'es-es': "Cura 30 puntos de daño a 1 de tus Pokémon.",
				'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano de 1 dos seus Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
			},

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

	retreat: 0,

	description: {
		'en-us': "Myriads of Cutiefly flutter above the heads of people who have auras resembling those of flowers.",
	},

	thirdParty: {
		cardmarket: 365782,
		tcgplayer: 178964
	}
}

export default card
