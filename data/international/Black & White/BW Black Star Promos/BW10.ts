import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		610,
	],
	hp: 50,
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
				'en-us': "Dragon Rage",
				'fr-fr': "Draco-Rage",
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez un côté pile, cette attaque ne fait rien.",
			},
			damage: 50,

		},
	],


	retreat: 1,




	description: {
		'en-us': "They use their tusks to crush the berries they eat. Repeated regrowth makes their tusks strong and sharp.",
	},
}

export default card
