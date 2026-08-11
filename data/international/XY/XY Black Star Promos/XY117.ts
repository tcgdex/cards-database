import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Assist",
				'fr-fr': "Assistance Énergétique",
			},
			effect: {
				'en-us': "Flip a coin. If heads, attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Victory Ball",
				'fr-fr': "Balle Victoire",
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Fire attachée à ce Pokémon.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it shares the infinite energy it creates, that being's entire body will be overflowing with power.",
	},

	thirdParty: {
		cardmarket: 293002
	}
}

export default card
