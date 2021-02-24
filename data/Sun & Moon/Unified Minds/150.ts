import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
	},
	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		148,
	],
	hp: 100,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Whirlpool",
				fr: "Siphon Destructeur",
			},
			effect: {
				en: "Discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
