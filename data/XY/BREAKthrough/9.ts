import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Chespin",
		fr: "Marisson",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		650,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tree Climb",
				fr: "Escal'Arbre",
			},
			effect: {
				en: "Search your deck for a Grass Energy card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Grass dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
			},

			damage: 30,

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
