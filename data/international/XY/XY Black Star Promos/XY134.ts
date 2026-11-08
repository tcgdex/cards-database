import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Empoleon BREAK",
		'fr-fr': "Pingoléon TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 170,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Empoleon",
		'fr-fr': "Pingoléon"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Emperor's Command",
				'fr-fr': "Ordre de l'Empereur"
			},
			effect: {
				'en-us': "This attack does 30 damage times the number of Pokémon your opponent has in play.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre de Pokémon que votre adversaire a en jeu."
			},
			damage: 30,

		},
	],

	thirdParty: {
		cardmarket: 289823
	}
}

export default card
