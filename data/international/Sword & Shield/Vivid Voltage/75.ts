import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [546],

	name: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'de-de': "Waumboll"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Rolling Tackle",
				'fr-fr': "Roulé-Boulé",
				'es-es': "Placaje Giro",
				'it-it': "Rollazione",
				'pt-br': "Golpe de Colisão Rolante",
				'de-de': "Rolltackle"
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

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511795,
				tcgplayer: 226483
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511795,
				tcgplayer: 226483
			}
		},
	],
}

export default card
