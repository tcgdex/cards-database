import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Yanma",
		de: "Yanma"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		193,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Agility",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn prevent all effects of attacks, including damage, done to Yanma.",
				de: "Wird eine Münze. Bei \"Kopf\" verhindere während des nächsten Zuges alle Auswirkungen von Angriffen (einschließlich Schaden), die Yanma zugefügt werden."
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
				en: "Triple Smash",
				de: "Dreifachschmetterer"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage plus 10 more damage for each heads.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte pro geworfenem \"Kopf\" zu."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
