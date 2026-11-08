import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
		'es-es': "Roselia",
		'it-it': "Roselia",
		'pt-br': "Roselia",
		'de-de': "Roselia"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
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
				'fr-fr': "Soignez 30 dégâts de l'un de vos Pokémon.",
				'es-es': "Cura 30 puntos de daño a 1 de tus Pokémon.",
				'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano de 1 dos seus Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sting",
				'fr-fr': "Dard",
				'es-es': "Aguijonazo",
				'it-it': "Puntura",
				'pt-br': "Ferroada",
				'de-de': "Einstich"
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
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Its flowers give off a relaxing fragrance. The stronger its aroma, the healthier the Roselia is."
	},

	thirdParty: {
		cardmarket: 436189,
		tcgplayer: 208269
	}
}

export default card
