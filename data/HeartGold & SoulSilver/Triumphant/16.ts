import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		455,
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
				en: "Saliva Lure",
				fr: "Piège de salive",
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec l'un des Pokémon de Banc de votre adversaire.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Stick and Absorb",
				fr: "Colle et absorbe",
			},
			effect: {
				en: "Remove 3 damage counters from Carnivine. The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Retirez 3 marqueurs de dégât à Vortente. Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
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
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
