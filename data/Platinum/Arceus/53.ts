import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Beedrill",
		de: "Bibor G"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],
	
	hp: 80,

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
				en: "Raid",
				de: "Überfall"
			},
			effect: {
				en: "If you played Beedrill from your hand during this turn, this attack's base damage is 40 instead of 10.",
				de: "Wenn du Bibor G in diesem Zug aus deiner Hand gespielt hast, beträgt der Grundschaden dieses Angriffs 40 Schadenspunkte anstelle von 10 Schadenspunkten."
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
				en: "Fury Attack",
				de: "Furienschlag"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278925,
		tcgplayer: 83776
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
