import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		781,
	],
	hp: 100,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sea Creeper Net",
				fr: "Filet Varech",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez un Pokémon de base dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque Tournante",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
