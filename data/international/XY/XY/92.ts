import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Spritzee",
		'fr-fr': "Fluvetin",
		'es-es': "Spritzee",
		'it-it': "Spritzee",
		'pt-br': "Spritzee",
		'de-de': "Parfi"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		682,
	],

	hp: 50,

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
				'en-us': "Sweet Scent",
				'fr-fr': "Doux Parfum",
				'es-es': "Aroma dulce",
				'it-it': "Profumino",
				'pt-br': "Aroma Doce",
				'de-de': "Lockduft"
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
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flop",
				'fr-fr': "Flop",
				'es-es': "Vuelta",
				'it-it': "Tonfo",
				'pt-br': "Baque",
				'de-de': "Plumps"
			},

			damage: 20,

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
		'en-us': "It emits a scent that enraptures those who smell it. This fragrance changes depending on what it has eaten.",
	},

	thirdParty: {
		cardmarket: 281429,
		tcgplayer: 89481
	}
}

export default card
