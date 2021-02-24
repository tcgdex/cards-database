import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Zekrom",
		fr: "Zekrom",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		644,
	],
	hp: 130,
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
				en: "Energy Stream",
				fr: "Courant d'Énergie",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre",
			},

			damage: 100,

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
