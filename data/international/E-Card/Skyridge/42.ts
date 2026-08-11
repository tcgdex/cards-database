import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Persian",
		'de-de': "Snobilikat"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [53],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Meowth",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surprise Slash",
				'de-de': "Überraschungsschlitzer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, look at your opponent's hand. If he or she has any Trainer cards there, choose 1 of them. You opponent shuffles that card into his or her deck.",
				'de-de': "Wirf eine Münze. Schau dir bei \"Kopf\" die Karte auf der Hand deines Gegners an. Wenn er darunter mindestens eine Trainerkarte hat, wähle eine davon. Dein Gegner mischt diese Karte in sein Deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Lunge",
				'de-de': "Ausfall"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Ausiwrkungen."
			},

			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87982,
				cardmarket: 275300
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87982,
				cardmarket: 275300
			},
		},
	],
	retreat: 0,
}

export default card
