import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 150,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Land Crush",
				fr: "Écras’Terre",
			},

			damage: 80,

		},
		{
			cost: [
				"Darkness",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Core Enforcer",
				fr: "Sanction Suprême",
			},
			effect: {
				en: "Discard a Darkness Energy and a Fairy Energy from this Pokémon.",
				fr: "Défaussez une Énergie Darkness et une Énergie Fairy de ce Pokémon.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
