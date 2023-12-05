import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Persian",
		de: "Snobilikat"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Meowth",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surprise Slash",
				de: "Überraschungsschlitzer"
			},
			effect: {
				en: "Flip a coin. If heads look at your opponent's hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.",
				de: "Wirf eine Münze. Schau dir bei \"Kopf\" die Karte auf der Hand deines Gegners an. Wenn er darunter mindestens eine Trainerkarte hat, wähle eine davon. Dein Gegner mischt diese Karte in sein Deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Lunge",
				de: "Ausfall"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Ausiwrkungen."
			},

			damage: 50
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
