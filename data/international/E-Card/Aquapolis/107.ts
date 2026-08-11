import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
		'de-de': "Wiesor"
	},

	illustrator: "Hizuki Misono",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [161],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spy",
				'fr-fr': "Espion",
				'de-de': "Spion"
			},
			effect: {
				'en-us': "Look at the top 3 cards of your opponent's deck. Put them back in the same order.",
				'fr-fr': "Regardez les 3 cartes du dessus du deck de votre adversaire. Replacez-les dans le même ordre.",
				'de-de': "Schaue dir die 3 obersten Karten des Decks deines Gegners an. Lege sie in der gleichen Reihenfolge zurück."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Scratch",
				'fr-fr': "Double griffe",
				'de-de': "Doppelkratzer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89063,
				cardmarket: 275183
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89063,
				cardmarket: 275183
			}
		},
	]
}

export default card
