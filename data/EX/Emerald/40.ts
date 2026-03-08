import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Swalot",
		fr: "Avaltout",
		de: "Schlukwech"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		317,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gulpin",
		fr: "Gloupti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blot",
				fr: "Pâté",
				de: "Blot"
			},
			effect: {
				en: "Remove 1 damage counter from Swalot.",
				fr: "Retirez à Avaltout un marqueur de dégât.",
				de: "Remove 1 damage counter from Swalot."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Breath",
				fr: "Haleine empoisonnée",
				de: "Poisoned Breath"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 89671,
		cardmarket: 276551
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
