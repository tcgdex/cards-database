import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		14,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Speed Evolution",
				fr: "Évolution rapide",
			},
			effect: {
				en: "Search your deck for a card that evolves from Kakuna and put it onto Kakuna. (This counts as evolving Kakuna.) Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Évolution de Coconfort et placez-la sur Coconfort (cela équivaut à faire évoluer Coconfort). Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-venin",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
