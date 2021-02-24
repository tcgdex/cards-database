import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
	},
	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		127,
	],
	hp: 120,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grip and Squeeze",
				fr: "Empoigne Puissante",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guillotine Hug",
				fr: "Étreinte Guillotine",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Actif de votre adversaire est mis K.O.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
