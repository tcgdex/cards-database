import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Paras",
		fr: "Paras",
		de: "Paras"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		46,
	],
	hp: 50,
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
				en: "Spore",
				fr: "Spore",
				de: "Pilzspore"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spore Evolution",
				fr: "Évolution spore",
				de: "Sporenentwicklung"
			},
			effect: {
				en: "Search your deack for a card that evolves from Paras. Attach it to Paras. This counts as evolving Paras. Shuffle your deck afterwards.",
				fr: "Cherchez dans votre deck une carte Évolution de Paras. Attachez-la à Paras. Cela revient à le faire évoluer. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach einer Karte, die aus Paras entsteht. Lege sie an Paras an. Dies zählt als Entwickeln von Paras. Mische dein Deck danach."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
