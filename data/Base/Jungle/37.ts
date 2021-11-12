import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Oddish",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre toxik"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
			}

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Foul Odor",
				fr: "Odeur fétide"
			},
			effect: {
				en: "Both the Defending Pokémon and Gloom are now Confused (after doing damage).",
				fr: "Le Pokémon Défenseur et Ortide sont maintenant tous deux Confus (après le calcul des dégâts)."
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

	description: {
		fr: "Le liquide qui s'écoule de sa bouche est comestible. Il sert à appâter sa proie."
	}
}

export default card
