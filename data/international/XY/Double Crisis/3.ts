import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Spheal",
		'fr-fr': "Obalie de la Team Aqua",
		'pt-br': "Spheal da Equipe Aqua",
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		363,
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
				'pt-br': "Revólver d'Água"
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
		'en-us': "Spheal's Water Gun can put out any fire. Flames used by opponents have no effect!",
	},

	thirdParty: {
		cardmarket: 282514,
		tcgplayer: 97049
	}
}

export default card
