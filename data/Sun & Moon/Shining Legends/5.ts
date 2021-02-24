import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		286,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Hibernation Spore",
				fr: "Spore d’Hibernation",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep. Your opponent flips 2 coins instead of 1 between turns. If either of them is tails, that Pokémon is still Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces au lieu d’une entre chaque tour. S'il obtient au moins un côté pile, le Pokémon reste Endormi.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnum Punch",
				fr: "Poing Magnum",
			},

			damage: 80,

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
