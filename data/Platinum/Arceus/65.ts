import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Geodude",
		de: "Kleinstein"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [74],
	
	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Stone Barrage",
				de: "Fels-Stakkato"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "At rest, it looks just like a rock. Carelessly stepping on it will make it swing its fists angrily."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85693,
				cardmarket: 278937
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278937,
				tcgplayer: 85693
			}
		},
	],

}

export default card
