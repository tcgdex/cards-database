import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Hitmonchan",
		de: "Nockchan"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Detect",
				de: "Scanner"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Hitmonchan during your opponent's next turn.",
				de: "Wirf eine Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Nockchan zugefügt werden."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sky Uppercut",
				de: "Himmelhieb"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279700
	}
}

export default card
