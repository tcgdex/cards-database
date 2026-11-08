import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Audino",
		'fr-fr': "Nanméouïe",
		'es-es': "Audino",
		'it-it': "Audino",
		'pt-br': "Audino",
		'de-de': "Ohrdoch"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Doubleslap",
				'fr-fr': "Torgnoles",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
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

	retreat: 2,

	description: {
		'en-us': "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling.",
	},

	thirdParty: {
		cardmarket: 279825,
		tcgplayer: 83659
	}
}

export default card
