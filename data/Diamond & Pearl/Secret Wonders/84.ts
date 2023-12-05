import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Corsola",
		fr: "Corayon",
		de: "Corasonn"
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
				de: "Mobilisieren"
			},
			effect: {
				en: "Search your deck for up to 3 different types of Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 3 types de Pokémon de base différents et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon-Karten unterschiedlichen Typs und lege sie auf deine Bank. Mische dein Deck danach."
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
				de: "Haken"
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
