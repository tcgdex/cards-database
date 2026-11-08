import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Ho-Oh BREAK",
		'fr-fr': "Ho-Oh TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Ho-Oh",
		'fr-fr': "Ho-Oh",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shining Flame",
				'fr-fr': "Flamme Brillante",
			},
			effect: {
				'en-us': "This Pokémon can't use Shining Flame during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Flamme Brillante pendant votre prochain tour."
			},
			damage: 160,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'fr-fr': "Flamme Brillante",
			},
			effect: {
				'fr-fr': "Ce Pokémon ne peut pas utiliser Flamme Brillante pendant votre prochain tour.",
			},
			damage: 160,

		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 291590
	}
}

export default card
