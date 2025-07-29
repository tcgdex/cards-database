import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Meowth",
		de: "Mauzi"
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
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
				en: "Sudden Swipe",
				de: "Plötzlicher Schlag"
			},
			effect: {
				en: "Flip a coin. If heads, look at your opponent's hand. If he or she has any Energy cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.",
				de: "Wirf eine Münze. Schau dir bei \"Kopf\" die Karten auf der Hand deines Gegners an. Wenn er darunter mindestens eine Energiekarte hat, wähle eine davon. Dein Gegner mischt diese Karte in sein Deck."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275336
	}
}

export default card
