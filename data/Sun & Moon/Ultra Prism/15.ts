import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Coax",
				fr: "Amadouer",
			},
			effect: {
				en: "Search your deck for up to 3 Basic Pokémon of different types and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 Pokémon de base de différents types dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Soothing Scent",
				fr: "Senteur Apaisante",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
