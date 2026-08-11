import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		120,
	],
	set: Set,
	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lunge",
				'fr-fr': "Coup Rapide",
			},
			damage: "20",
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
	],

	illustrator: "Tomokazu Komiya",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293320,
				tcgplayer: 110431
			}
		}
	]
}

export default card

