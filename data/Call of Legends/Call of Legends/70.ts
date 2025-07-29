import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Slowpoke",
		de: "Flegmon"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Whimsy Tackle",
				de: "Launischer Tackle"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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

	thirdParty: {
		cardmarket: 279713
	}
}

export default card
