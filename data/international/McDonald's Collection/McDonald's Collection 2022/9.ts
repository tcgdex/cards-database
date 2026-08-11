import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy",
		'de-de': "Waaty"
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [180],

	hp: 100,

	types: ["Lightning"],

	stage: "Stage1",

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'es-es': "Mareep",
		'it-it': "Mareep",
		'pt-br': "Mareep",
		'de-de': "Voltilamm"
	},

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
				'es-es': "Bola Voltio",
				'it-it': "Energisfera",
				'pt-br': "Bola Elétrica",
				'de-de': "Elektroball"
			},
			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670474,
				tcgplayer: 281478
			}
		}
	]
}

export default card

