import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Houndour",
		de: "Hunduster"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		228,
	],
	hp: 50,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retaliate",
				de: "Vergeltung"
			},
			effect: {
				en: "This attack does 10 damage times the number of damage counters on Houndour.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an Schadensmarken auf Hunduster zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fireworks",
				de: "Feuerwerk"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Energy card attached to Houndour.",
				de: "Wirf eine Münze. Lege bei \"Zahl\" eine an Hunduster angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
