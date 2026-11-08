import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [363],
	set: Set,

	name: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
		'es-es': "Spheal",
		'it-it': "Spheal",
		'pt-br': "Spheal",
		'de-de': "Seemops"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Its body is covered in fluffy fur. The fur keeps it from feeling cold while it is rolling on ice."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567117,
				tcgplayer: 241690
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567117,
				tcgplayer: 241690
			}
		},
	],
}

export default card
