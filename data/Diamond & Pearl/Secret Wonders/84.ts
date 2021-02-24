import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Corsola",
		fr: "Corayon",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		222,
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
				en: "Rally",
				fr: "Regroupement",
			},
			effect: {
				en: "Search your deck for up to 3 different types of Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 3 types de Pokémon de base différents et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hook",
				fr: "Crochet",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
