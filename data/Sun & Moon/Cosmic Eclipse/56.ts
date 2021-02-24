import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		395,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recall",
				fr: "Récupération",
			},
			effect: {
				en: "Choose an attack from 1 of this Pokémon's previous Evolutions and use it as this attack.",
				fr: "Choisissez une attaque de l’une des précédentes Évolutions de ce Pokémon et utilisez-la en tant que cette attaque.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aquafall",
				fr: "Aquasplash",
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie de ce Pokémon.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
