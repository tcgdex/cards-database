import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste",
		'es-es': "Clauncher",
		'it-it': "Clauncher",
		'pt-br': "Clauncher",
		'de-de': "Scampisto"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		692,
	],

	hp: 60,

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
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revólver d’Água",
				'de-de': "Aquaknarre"
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
		'en-us': "Through controlled expulsions of internal gas, it can expel water like a pistol shot. At close distances, it can shatter rock.",
	},

	thirdParty: {
		cardmarket: 355544,
		tcgplayer: 165676
	}
}

export default card
