import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "M Swampert EX",
		'fr-fr': "M Laggron EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		260,
	],
	hp: 220,
	types: [
		"Water",
	],
	evolveFrom: {
		'en-us': "Swampert-EX",
		'fr-fr': "Laggron-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strongarm Impact",
				'fr-fr': "Impact Bras d'Fer",
			},
			effect: {
				'en-us': "You may do 30 more damage. If you do, discard the top 3 cards of each player's deck.",
				'fr-fr': "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, défaussez les trois cartes du dessus du deck de chaque joueur."
			},
			damage: "130+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'fr-fr': "Impact Bras d'Fer",
			},
			effect: {
				'fr-fr': "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, défaussez les trois cartes du dessus du deck de chaque joueur.",
			},
			damage: "130+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
