import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'de-de': "Mauzi"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pay Day",
				'fr-fr': "Jackpot",
				'de-de': "Zahltag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, draw a card.",
				'fr-fr': "Lancez une pièce. Si c'est face, piochez une carte.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ziehe 1 Karte."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen.Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is nocturnal in nature. If it spots something shiny, its eyes glitter brightly.",
		'fr-fr': "Son regard s'anime à la vue d'un objet brillant. C'est un Pokémon nocturne."
	},

	thirdParty: {
		cardmarket: 278255,
		tcgplayer: 87320
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["platinum"]
		}
	]
}

export default card
