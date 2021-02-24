import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Vivillon",
		fr: "Prismillon",
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		666,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dizzying Poison",
				fr: "Poison Étourdissant",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Powder",
				fr: "Nuée de Poudre",
			},
			effect: {
				en: "This attack does 30 more damage for each Fire Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Fire attachée au Pokémon Actif de votre adversaire.",
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
