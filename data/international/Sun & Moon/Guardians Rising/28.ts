import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Sharpedo",
		'fr-fr': "Sharpedo",
		'es-es': "Sharpedo",
		'it-it': "Sharpedo",
		'pt-br': "Sharpedo",
		'de-de': "Tohaido"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Jet Headbutt",
				'fr-fr': "Bélier Volant",
				'es-es': "Turbocabezazo",
				'it-it': "Zuccata Jet",
				'pt-br': "Cabeçada a Jato",
				'de-de': "Flinke Kopfnuss"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It pursues its prey at speeds of 75 mph and finishes them off with fangs that can crush iron. It is known as the bully of the sea.",
	},

	thirdParty: {
		cardmarket: 297490,
		tcgplayer: 130928
	}
}

export default card
