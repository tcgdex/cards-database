import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Raboot",
		'fr-fr': "Lapyro",
		'es-es': "Raboot",
		'it-it': "Raboot",
		'pt-br': "Raboot",
		'de-de': "Kickerlo"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Scorbunny",
		'fr-fr': "Flambino",
		'es-es': "Scorbunny",
		'it-it': "Scorbunny",
		'pt-br': "Scorbunny",
		'de-de': "Hopplo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Kick",
				'fr-fr': "Koud'Pied",
				'es-es': "Patada",
				'it-it': "Calcio",
				'pt-br': "Chute",
				'de-de': "Tritt"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur",
				'es-es': "Explosión de Calor",
				'it-it': "Caldobomba",
				'pt-br': "Raio de Calor",
				'de-de': "Hitzestoß"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
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
		'en-us': "Its thick and fluffy fur protects it from the cold and enables it to use hotter fire moves."
	},

	dexId: [814],

	thirdParty: {
		cardmarket: 436319,
		tcgplayer: 208311
	}
}

export default card
