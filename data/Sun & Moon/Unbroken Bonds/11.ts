import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Venomoth",
		fr: "Aéromite",
	},
	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Assassin Flight",
				fr: "Vol Assassin",
			},
			effect: {
				en: "You can use this attack only if your opponent's Active Pokémon is affected by a Special Condition. This attack does 90 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous ne pouvez utiliser cette attaque que si le Pokémon Actif de votre adversaire est affecté par un État Spécial. Cette attaque inflige 90 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Powder",
				fr: "Poudre Toxik",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
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





}

export default card
