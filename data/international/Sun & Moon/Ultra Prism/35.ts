import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Buizel",
		'fr-fr': "Mustébouée",
		'es-es': "Buizel",
		'it-it': "Buizel",
		'pt-br': "Buizel",
		'de-de': "Bamelin"
	},

	illustrator: "so-taro",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		418,
	],

	hp: 70,

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
		'en-us': "It inflates the flotation sac around its neck and pokes its head out of the water to see what is going on.",
	},

	thirdParty: {
		cardmarket: 315966,
		tcgplayer: 157652
	}
}

export default card
