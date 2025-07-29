import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Teddiursa",
		de: "Teddiursa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		216,
	],

	hp: 40,

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
				en: "Surprise Attack",
				de: "Überraschungsangriff"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

			damage: 20
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				de: "Raserei"
			},
			effect: {
				en: "This attack does 10 damage plus 10 more damage for each damage counter on Teddiursa.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 zusätzliche Schadenspunkte für jede Schadensmarke auf Teddiursa zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275367
	}
}

export default card
