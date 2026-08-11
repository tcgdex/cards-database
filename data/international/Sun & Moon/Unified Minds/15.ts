import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Fomantis",
		'fr-fr': "Mimantis",
		'es-es': "Fomantis",
		'it-it': "Fomantis",
		'pt-br': "Fomantis",
		'de-de': "Imantis"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		753,
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
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leafage",
				'fr-fr': "Feuillage",
				'es-es': "Follaje",
				'it-it': "Fogliame",
				'pt-br': "Folhagem",
				'de-de': "Blattwerk"
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

	description: {
		'en-us': "When the sun rises, Fomantis spreads its four leaves and bathes in the sunlight. The tip of its head has a pleasant aroma.",
	},

	thirdParty: {
		cardmarket: 387907,
		tcgplayer: 194931
	}
}

export default card
