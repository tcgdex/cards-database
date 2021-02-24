import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
	},
	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		370,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Even Game",
				fr: "Partie Équilibrée",
			},
			effect: {
				en: "Search your deck for a number of Basic Pokémon up to the number of your opponent's Benched Pokémon and put those Pokémon onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck un nombre de Pokémon de base inférieur ou égal au nombre de Pokémon de Banc de votre adversaire, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
