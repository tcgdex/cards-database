import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Nincada",
		fr: "Ningale",
		de: "Nincada"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		290,
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
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Big Bite",
				fr: "Grosse morsure",
				de: "Mächtiger Biss"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il grandit sous terre et se repère grâce à ses antennes car ses yeux sont quasiment aveugles."
	},

	thirdParty: {
		cardmarket: 278257
	}
}

export default card
