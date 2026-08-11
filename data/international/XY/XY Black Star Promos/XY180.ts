import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Arcanine BREAK",
		'fr-fr': "Arcanin TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Turbo Flame",
				'fr-fr': "Flamme Turbo"
			},
			effect: {
				'en-us': "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc."
			},
			damage: 80,

		},
	],

	thirdParty: {
		cardmarket: 295169
	}
}

export default card
