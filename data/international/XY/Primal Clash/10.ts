import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'es-es': "Lotad",
		'it-it': "Lotad",
		'pt-br': "Lotad",
		'de-de': "Loturzel"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		270,
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
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'es-es': "Toque",
				'it-it': "Battuta",
				'pt-br': "Pulso",
				'de-de': "Verprügler"
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

	retreat: 1,

	description: {
		'en-us': "It searches about for clean water. If it does not drink water for too long, the leaf on its head wilts.",
	},

	thirdParty: {
		cardmarket: 273541,
		tcgplayer: 95894
	}
}

export default card
