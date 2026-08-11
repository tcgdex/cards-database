import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Natu",
		'de-de': "Natu"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [177],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Foresight",
				'de-de': "Blick in die Zukunft"
			},
			effect: {
				'en-us': "Look at the top 3 cards of either player's deck and rearrange them as you like.",
				'de-de': "Schaue dir die drei obersten Karten entweder von deinem Deck oder dem Deck deines Gegners an und lege sie in einer beliebigen Reihnvolge wieder zurück."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Removal Beam",
				'de-de': "Entfernungsstrahl"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and discard it.",
				'de-de': "Wirf eine Münze, falls an das verteidigende Pokémon mindestens eine Energiekarte angelegt ist. Wähle bei \"Kopf\" 1 dieser Energiekarten und lege sie auf den Ablagestapel deines Gegners."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87683,
				cardmarket: 275338
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87683,
				cardmarket: 275338
			},
		},
	],
}

export default card
