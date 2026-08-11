import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [614],

	name: {
		'en-us': "Beartic",
		'fr-fr': "Polagriffe",
		'es-es': "Beartic",
		'it-it': "Beartic",
		'pt-br': "Beartic",
		'de-de': "Siberio"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
		'es-es': "Cubchoo",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'de-de': "Petznief"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frozen Slice",
				'fr-fr': "Tranche Gelée",
				'es-es': "Tajo Congelado",
				'it-it': "Tagliaghiaccio",
				'pt-br': "Corte Congelado",
				'de-de': "Frostschneide"
			},
			effect: {
				'en-us': "This Pokémon also does 50 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
				'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It swims through frigid seas, searching for prey. From its frozen breath, it forms icy fangs that are harder than steel."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483119,
				tcgplayer: 219361
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483119,
				tcgplayer: 219361
			}
		},
	],
}

export default card
