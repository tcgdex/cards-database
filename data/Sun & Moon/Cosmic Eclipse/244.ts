import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Gallade",
		fr: "Gallame",
	},
	illustrator: "Huang Tzu En",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		475,
	],
	hp: 160,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Double Type",
				fr: "Type Double",
			},
			effect: {
				en: "As long as this Pokémon is in play, it is {P} and {F} type.",
				fr: "Tant que ce Pokémon est en jeu, il est de type Psychic et Fighting.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Cyclone",
				fr: "Cyclone d’Énergie",
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
			},
			damage: 120,

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
