import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [274],

	name: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'es-es': "Seedot",
		'it-it': "Seedot",
		'pt-br': "Seedot",
		'de-de': "Samurzel"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'Herbe",
				'es-es': "Hoja Afilada",
				'it-it': "Foglielama",
				'pt-br': "Folha Navalha",
				'de-de': "Rasierblatt"
			},

			damage: 40,

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


	stage: "Stage1",

	description: {
		'en-us': "It lives deep in forests. With the leaf on its head, it makes a flute whose song makes listeners uneasy."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511475,
				tcgplayer: 226373
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511475,
				tcgplayer: 226373
			}
		},
	],
}

export default card
