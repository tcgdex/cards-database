import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		13,
	],
	hp: 40,
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
				en: "Speed Evolution",
				fr: "Évolution rapide",
			},
			effect: {
				en: "Search your deck for a card that evolves from Weedle and put it onto Weedle. (This counts as evolving Weedle.) Shuffle your deck afterward.",
				fr: "Cherchez une carte Évolution d’Aspicot dans votre deck et placez-la sur Aspicot (cela équivaut à faire évoluer Aspicot). Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sting",
				fr: "Dard",
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
