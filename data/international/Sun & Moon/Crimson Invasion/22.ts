import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'es-es': "Remoraid",
		'it-it': "Remoraid",
		'pt-br': "Remoraid",
		'de-de': "Remoraid"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		223,
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
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revólver d’Água",
				'de-de': "Aquaknarre"
			},

			damage: 30,

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
		'en-us': "It has superb accuracy. The water it shoots out can strike even moving prey from more than 300 feet.",
	},

	thirdParty: {
		cardmarket: 311872,
		tcgplayer: 149043
	}
}

export default card
