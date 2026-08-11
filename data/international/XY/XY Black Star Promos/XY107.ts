import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mewtwo EX",
		'fr-fr': "Mewtwo EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Shatter Shot",
				'fr-fr': "Coup Fracassant",
			},
			effect: {
				'en-us': "This attack does 30 damage times the amount of Psychic Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Psychic attachées à ce Pokémon.",
			},
			damage: "30×",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'fr-fr': "Change Dégâts",
				'en-us': "Damage Change"
			},
			effect: {
				'fr-fr': "Échangez tous les marqueurs de dégâts de ce Pokémon avec ceux du Pokémon Actif de votre adversaire.",
				'en-us': "Switch all damage counters on this Pokémon with those on your opponent's Active Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 554275
	}
}

export default card
