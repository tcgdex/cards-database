import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Magikarp",
		de: "Karpador"
	},
	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		129,
	],
	hp: 30,
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
				en: "Signs of Evolution",
				de: "Evolutionsanzeichen"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a card that evolves from Magikarp, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				de: "Wirf eine Münze. Durchsuche bei 'Kopf' dein Deck nach einer Karte, die aus Karpador entsteht, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splash",
				de: "Platscher"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
