import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Beedrill G",
		'de-de': "Bibor G"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [15],
	
	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Raid",
				'de-de': "Überfall"
			},
			effect: {
				'en-us': "If you played Beedrill G from your hand during this turn, this attack's base damage is 40 instead of 10.",
				'de-de': "Wenn du Bibor G in diesem Zug aus deiner Hand gespielt hast, beträgt der Grundschaden dieses Angriffs 40 Schadenspunkte anstelle von 10 Schadenspunkten."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Attack",
				'de-de': "Furienschlag"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83776,
				cardmarket: 278925
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278925,
				tcgplayer: 83776
			}
		},
	],

}

export default card
