import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'de-de': "Pandagro"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		675,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Light Punch",
				'fr-fr': "Poing Léger",
				'es-es': "Puño Ligero",
				'it-it': "Pugnetto",
				'pt-br': "Soco de Luz",
				'de-de': "Leichter Hieb"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnum Punch",
				'fr-fr': "Poing Magnum",
				'es-es': "Puño Magnum",
				'it-it': "Superpugno",
				'pt-br': "Soco Magnum",
				'de-de': "Magnum-Schlag"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This rowdy Pokémon boasts great physical strength. Many Trainers are also smitten by its lively character.",
	},

	thirdParty: {
		cardmarket: 408249,
		tcgplayer: 201152
	}
}

export default card
