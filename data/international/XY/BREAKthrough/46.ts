import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
		'es-es': "Froakie",
		'it-it': "Froakie",
		'pt-br': "Froakie",
		'de-de': "Froxy"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		656,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
				'es-es': "Destructor",
				'it-it': "Botta",
				'pt-br': "Pancada",
				'de-de': "Pfund"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
	},

	thirdParty: {
		cardmarket: 286292,
		tcgplayer: 107165
	}
}

export default card
