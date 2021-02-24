import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Karrablast",
		fr: "Carabing",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		588,
	],
	hp: 60,
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
				en: "Mysterious Evolution",
				fr: "Évolution Mystérieuse",
			},
			effect: {
				en: "If Shelmet is in play, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				fr: "Si Escargaume est en jeu, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

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
