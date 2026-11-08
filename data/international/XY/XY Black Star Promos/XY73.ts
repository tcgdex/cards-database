import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Rayquaza EX",
		'fr-fr': "Rayquaza EX",
	},

	illustrator: "PLANETA",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Strike",
				'fr-fr': "Frappe du Dragon"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon can't use Dragon Strike during your next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas utiliser Frappe du Dragon pendant votre prochain tour."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 553219
	}
}

export default card
