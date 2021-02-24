import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "M Venusaur-EX",
		fr: "M-Florizarre-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 230,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venusaur-EX",
		fr: "Florizarre-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Crisis Vine",
				fr: "Crise-Lianes",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
