import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik",
		'es-es': "Pineco",
		'it-it': "Pineco",
		'pt-br': "Pineco",
		'de-de': "Tannza"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		204,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn't bother it.",
	},

	thirdParty: {
		cardmarket: 281487,
		tcgplayer: 91137
	}
}

export default card
