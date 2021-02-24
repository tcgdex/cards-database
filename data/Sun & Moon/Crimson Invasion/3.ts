import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		15,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sudden Sting",
				fr: "Piqûre Inattendue",
			},
			effect: {
				en: "If this Pokémon evolved from Kakuna during this turn, your opponent's Active Pokémon is now Paralyzed and Poisoned.",
				fr: "Si ce Pokémon a évolué de Coconfort pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sharp Sting",
				fr: "Piqûre Pointue",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
