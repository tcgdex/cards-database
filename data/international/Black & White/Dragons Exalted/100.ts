import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Ambipom",
		'fr-fr': "Capidextre",
		'es-es': "Ambipom",
		'it-it': "Ambipom",
		'pt-br': "Ambipom",
		'de-de': "Ambidiffel"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		424,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Hit",
				'fr-fr': "Coup Double",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hand Fling",
				'fr-fr': "Catapu-Main",
			},
			effect: {
				'en-us': "Does 10 damage times the number of cards in your hand.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de cartes dans votre main.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Split into two, the tails are so adept at handling and doing things, Ambipom rarely uses its hands.",
	},

	thirdParty: {
		cardmarket: 280539,
		tcgplayer: 83529
	}
}

export default card
