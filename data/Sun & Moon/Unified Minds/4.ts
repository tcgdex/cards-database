import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
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
				en: "Time Spiral",
				fr: "Spirale Temporelle",
			},
			effect: {
				en: "Devolve 1 of your opponent's evolved Pokémon by removing the highest Stage Evolution card from it. Your opponent shuffles that card into their deck.",
				fr: "Faites dés-évoluer l’un des Pokémon évolués de votre adversaire en ôtant la carte Évolution de plus haut Niveau. Votre adversaire mélange cette carte avec son deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mind Bend",
				fr: "Contrôleur d’Esprit",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 20,

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
