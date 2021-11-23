import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Paras",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Wild Spores",
				fr: "Spores sauvages"
			},
			effect: {
				en: "If Parasect evolved from Paras during this turn, this attack does 40 damage and the Defending Pokémon is now Asleep and Poisoned.",
				fr: "Si Parasect a évolué de Paras lors de ce tour, cette attaque inflige 40 dégâts et le Pokémon Défenseur est maintenant Endormi et Empoisonné."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Extend Fungus",
				fr: "Champignon grandissant"
			},
			effect: {
				en: "Remove 2 damage counters from Parasect.",
				fr: "Retirez à Parasect 2 marqueurs de dégât."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	description: {
		fr: "Un champignon parasite plus gros que Parasect contrôle son corps. Il répand des spores empoisonnées."
	}
}

export default card
