import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
		'es-es': "Nidorino",
		'it-it': "Nidorino",
		'pt-br': "Nidorino",
		'de-de': "Nidorino"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran♂",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Double Kick",
				'fr-fr': "Double Pied",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud'Korne",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has a violent disposition and stabs foes with its horn, which oozes poison upon impact.",
	},

	thirdParty: {
		cardmarket: 280922,
		tcgplayer: 87748
	}
}

export default card
