import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [170],

	hp: 70,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
				'es-es': "Bola Voltio",
				'it-it': "Energisfera",
				'pt-br': "Bola Elétrica",
				'de-de': "Elektroball"
			},
			damage: 10,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670473,
				tcgplayer: 281491
			}
		}
	]
}

export default card

