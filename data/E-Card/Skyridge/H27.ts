import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Rhydon",
		de: "Rizeros"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		112,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rhyhorn",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stomp",
				de: "Stampfer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Giant Tail",
				de: "Riesenschweif"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				de: "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 100
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
