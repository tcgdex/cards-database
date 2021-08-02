import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Volbeat",
		fr: "Muciole",
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		313,
	],
	hp: 70,
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
				en: "Luring Glow",
				fr: "Lueur Attrayante",
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with your opponent’s Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec le Pokémon Actif de votre adversaire.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Signal Beam",
				fr: "Rayon Signal",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
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
