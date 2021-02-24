import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		127,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Grip and Squeeze",
				fr: "Empoigner et presser",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Guillotine",
				fr: "Guillotine puissante",
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack's base damage is 10 instead of 100.",
				fr: "Lancez 2 pièces. Si vous obtenez une pile, les dégâts de base de cette attaque sont de 10 au lieu de 100.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
