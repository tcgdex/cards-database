import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
		'es-es': "Gyarados",
		'it-it': "Gyarados",
		'pt-br': "Gyarados",
		'de-de': "Garados"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc Aiguisé",
			},

			damage: 60,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swing Around",
				'fr-fr': "Balançoire",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Once it begins to rampage, a Gyarados will burn everything down, even in a harsh storm.",
	},

	thirdParty: {
		cardmarket: 280463,
		tcgplayer: 86000
	}
}

export default card
