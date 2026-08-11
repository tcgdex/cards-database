import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [731],

	name: {
		'en-us': "Pikipek",
		'fr-fr': "Picassaut",
		'es-es': "Pikipek",
		'it-it': "Pikipek",
		'pt-br': "Pikipek",
		'de-de': "Peppeck"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Pikser"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It may look spindly, but its neck muscles are heavy-duty. It can peck at a tree 16 times per second!"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512425,
				tcgplayer: 226601
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512425,
				tcgplayer: 226601
			}
		},
	],
}

export default card
