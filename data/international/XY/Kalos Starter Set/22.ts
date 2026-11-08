import { Card } from 'models/database/card'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		209,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
				'es-es': "Golpe Cabeza",
				'it-it': "Bottintesta",
				'pt-br': "Cabeçada",
				'de-de': "Kopfnuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has an active, playful nature. Many women like to frolic with it because of its affectionate ways.",
	},

	thirdParty: {
		cardmarket: 281288,
		tcgplayer: 89418
	}
}

export default card
