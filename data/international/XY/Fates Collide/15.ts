import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'it-it': "Seel",
		'pt-br': "Seel",
		'de-de': "Jurob"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		86,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Icy Snow",
				'fr-fr': "Verglas",
				'es-es': "Nieve Helada",
				'it-it': "Geloneve",
				'pt-br': "Neve Congelada",
				'de-de': "Eisiger Schnee"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Covered with light blue fur, its hide is thick and tough. It is active in bitter cold of -40 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 289841,
		tcgplayer: 117777
	}
}

export default card
