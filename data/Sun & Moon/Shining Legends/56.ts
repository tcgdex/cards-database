import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Shining Rayquaza",
		fr: "Rayquaza Brillant",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
			},
			effect: {
				en: "Discard the top 2 cards of your deck.",
				fr: "Défaussez les 2 cartes du dessus de votre deck.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Sky Judgment",
				fr: "Jugement Céleste",
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
			},
			damage: 190,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
