import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Hoopa",
		'fr-fr': "Hoopa",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		720,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Summoning Draw",
				'fr-fr': "Pioche Invocatoire",
			},
			effect: {
				'en-us': "If Pikachu is on your Bench, draw 3 cards.",
				'fr-fr': "Si Pikachu est sur votre Banc, piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Spin",
				'fr-fr': "Double Tour"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It gathers things it likes and pushes them through its loop to teleport them to a secret place.",
	},

	thirdParty: {
		cardmarket: 289790
	}
}

export default card
