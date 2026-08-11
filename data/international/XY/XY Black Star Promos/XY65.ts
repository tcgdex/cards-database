import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Latios",
		'fr-fr': "Latios",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	stage: "Basic",
	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Suersonic Flight",
				'fr-fr': "Voyage Supersonique",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyburn",
				'fr-fr': "Brûlure Psy"
			},

			damage: 70,

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
		'en-us': "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting.",
	},

	thirdParty: {
		cardmarket: 553449
	}
}

export default card
