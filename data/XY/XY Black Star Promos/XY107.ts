import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Mewtwo EX",
		fr: "Mewtwo EX",
	},
	illustrator: "5ban Graphics",
	rarity: "None",
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
				en: "Shatter Shot",
				fr: "Coup Fracassant",
			},
			effect: {
				en: "This attack does 30 damage times the amount of Psychic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Psychic attachées à ce Pokémon.",
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
				fr: "Change Dégâts",
				en: "Damage Change"
			},
			effect: {
				fr: "Échangez tous les marqueurs de dégâts de ce Pokémon avec ceux du Pokémon Actif de votre adversaire.",
				en: "Switch all damage counters on this Pokémon with those on your opponent's Active Pokémon."
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



}

export default card
