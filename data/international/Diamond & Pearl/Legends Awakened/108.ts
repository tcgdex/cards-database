import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Nincada",
		'fr-fr': "Ningale",
		'de-de': "Nincada"
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
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Big Bite",
				'fr-fr': "Grosse morsure",
				'de-de': "Mächtiger Biss"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
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
		'en-us': "It grows underground, sensing its surroundings using antennae instead of its virtually blind eyes.",
		'fr-fr': "Il grandit sous terre et se repère grâce à ses antennes car ses yeux sont quasiment aveugles."
	},

	thirdParty: {
		cardmarket: 278257,
		tcgplayer: 87760
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
