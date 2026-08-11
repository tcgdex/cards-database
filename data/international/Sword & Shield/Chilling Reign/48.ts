import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [180],
	set: Set,

	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy",
		'de-de': "Waaty"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'es-es': "Mareep",
		'it-it': "Mareep",
		'pt-br': "Mareep",
		'de-de': "Voltilamm"
	},

	attacks: [{
		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Bola Elétrica",
			'de-de': "Elektroball"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567128,
				tcgplayer: 241705
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567128,
				tcgplayer: 241705
			}
		},
	],
}

export default card
