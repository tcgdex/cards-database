import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Beheeyem BREAK",
		'fr-fr': "Neitram TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		606,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Beheeyem",
		'fr-fr': "Neitram"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Cosmic Circle",
				'fr-fr': "Cercle Cosmique"
			},
			effect: {
				'en-us': "Move as many Psychic Energy attached to your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant d'Énergies  attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez."
			},
			damage: 100,

		},
	],

	thirdParty: {
		cardmarket: 289824
	}
}

export default card
