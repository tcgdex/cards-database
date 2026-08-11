import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
	},

	illustrator: "match",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Hunt",
				'fr-fr': "Stop Θ",
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, attach a basic Energy card from your discard pile to your Benched Pokémon-EX in any way you like.",
				'fr-fr': "Lancez 3 pièces. Pour chaque côté face, attachez une carte Énergie de base de votre pile de défausse à vos Pokémon-EX de Banc, de la manière que vous voulez."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Slash",
				'fr-fr': "Tranch'Griffe"
			},

			damage: 20,

		},
	],

	retreat: 2,

	description: {
		'en-us': "It dwells in the darkness of caves. It uses its sharp claws to dig up gems to nourish itself.",
	},

	thirdParty: {
		cardmarket: 289794
	}
}

export default card
