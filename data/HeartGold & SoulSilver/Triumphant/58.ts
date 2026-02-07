import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Bronzor",
		fr: "Archéomire",
		de: "Bronzel"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		436,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Iron Defense",
				fr: "Mur de fer",
				de: "Eisenabwehr"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Bronzor during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, prévenez tous les effets d’attaques (y compris les dégâts) infligés à Archéomire durant le prochain tour de votre adversaire.",
				de: "Wirf eine Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Bronzel zugefügt werden."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Ancient people believed that the pattern on Bronzor’s back contained a mysterious power."
	},

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'reverse', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279588,
		tcgplayer: 84006
	}
}

export default card
