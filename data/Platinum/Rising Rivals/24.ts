import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Heracross 4",
		fr: "Scarhino  Niv. 51",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		214,
	],
	hp: 90,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Focus Energy",
				fr: "Puissance",
			},
			effect: {
				en: "During your next turn, Heracross 's Megahorn attack's base damage is 100.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Megacorne de Scarhino  sont de 100.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Megahorn",
				fr: "Megacorne",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
