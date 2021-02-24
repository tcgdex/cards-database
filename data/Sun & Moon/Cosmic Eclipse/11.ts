import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Cradily",
		fr: "Vacilys",
	},
	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		346,
	],
	hp: 150,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Lileep",
		fr: "Lilia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Swaying Strangle",
				fr: "Balancement Enserrant",
			},
			effect: {
				en: "Your opponent's Pokémon that are affected by Special Conditions can't retreat.",
				fr: "Les Pokémon de votre adversaire qui sont affectés pas un État Spécial ne peuvent pas battre en retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Tentacles",
				fr: "Tentacules Empoisonnés",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
