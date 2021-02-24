import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Drampa",
		fr: "Draïeul",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		780,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Wisdom",
				fr: "Sagesse des Dragons",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Dragon Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon Dragon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Mégaphone",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
