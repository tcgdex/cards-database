import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
		'es-es': "Prinplup",
		'it-it': "Prinplup",
		'pt-br': "Prinplup",
		'de-de': "Pliprin"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		394,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Razor Wing",
				'fr-fr': "Aile Tranchante"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Attack",
				'fr-fr': "Furie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Because every Prinplup considers itself to be the most important, they can never form a group.",
	},

	thirdParty: {
		cardmarket: 280356,
		tcgplayer: 88372
	}
}

export default card
