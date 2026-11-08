import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gentle Slap",
				'fr-fr': "Gifle Douce",
				'es-es': "Bofetada Gentil",
				'it-it': "Schiaffetto",
				'pt-br': "Tapinha",
				'de-de': "Sanfter Hieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "On the dark ocean floor, its only means of communication is its constantly flashing lights."
	},

	dexId: [170],

	thirdParty: {
		cardmarket: 436469,
		tcgplayer: 208366
	}
}

export default card
