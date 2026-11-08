import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix",
		'de-de': "Knacklion"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		328,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Inviting Trap",
				'fr-fr': "Piège tentant",
				'de-de': "Einladende Falle"
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
				'de-de': "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sand Tomb",
				'fr-fr': "Tombe de sable",
				'de-de': "Sandgrab"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It makes a conical pit in desert sand and lies in wait at the bottom for prey to come tumbling down.",
	},

	thirdParty: {
		cardmarket: 277868,
		tcgplayer: 90023
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["david-cohen"]
		}
	]
}

export default card
