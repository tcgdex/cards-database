import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		79,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Lure",
				fr: "Queue Attrayante",
			},
			effect: {
				en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
