import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Nihilego",
		fr: "Zéroïd",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		793,
	],
	hp: 110,
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
				en: "Nightcap",
				fr: "Encore Un",
			},
			effect: {
				en: "You can use this attack only if your opponent has exactly 2 Prize cards remaining. Choose 1 of your opponent's Pokémon's attacks and use it as this attack.",
				fr: "Vous ne pouvez utiliser cette attaque que s’il reste exactement 2 cartes Récompense à votre adversaire. Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Void Tentacles",
				fr: "Tentacules du Néant",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
