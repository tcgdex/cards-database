import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		286,
	],
	hp: 120,
	types: [
		"Fighting",
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
				en: "Spore",
				fr: "Spore",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Pre-Dawn Strike",
				fr: "Frappe Matinale",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Asleep, this attack does 90 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
