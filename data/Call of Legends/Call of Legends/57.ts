import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
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
				fr: "Détection",
				de: "Scanner"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Hitmonchan during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à Tygnon pendant le prochain tour de votre adversaire.",
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
				fr: "Stratopercut",
				de: "Himmelhieb"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
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
		cardmarket: 279700,
		tcgplayer: 86096
	}
}

export default card
