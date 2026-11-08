import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas",
		'de-de': "Muschas"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		90,
	],

	hp: 50,

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
				'en-us': "Minimize",
				'fr-fr': "Lilliput",
				'de-de': "Komprimator"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Shellder by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, les dégâts infligés à Kokiyas par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Aller Schaden, der Muschas während des nächsten Zuges deines Gegners durch Angriff zugefügt wird, wird um 20 Schadenspunkte reduziert (nach Verechnung von Schwäche und Resistenz.)"
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse vague",
				'de-de': "Wellenplatscher"
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


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276255,
				tcgplayer: 89137
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276255,
				tcgplayer: 89137
			},
		},
	],
}

export default card
