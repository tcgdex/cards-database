import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Rayquaza EX",
		fr: "Rayquaza EX",
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 170,
	types: [
		"Colorless",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Ascension",
				fr: "Megascension",
			},
			effect: {
				en: "Search your deck for M Rayquaza-EX, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez M-Rayquaza-EX dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aeroscream",
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Energy attached to this Pokémon.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
