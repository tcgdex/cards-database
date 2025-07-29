import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Sentret",
		fr: "Fouinette",
		de: "Wiesor"
	},

	illustrator: "Hizuki Misono",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		161,
	],

	hp: 50,

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
				en: "Spy",
				fr: "Espion",
				de: "Spion"
			},
			effect: {
				en: "Look at the top 3 cards of your opponent's deck. Put them back in the same order.",
				fr: "Regardez les 3 cartes du dessus du deck de votre adversaire. Replacez-les dans le même ordre.",
				de: "Schaue dir die 3 obersten Karten des Decks deines Gegners an. Lege sie in der gleichen Reihenfolge zurück."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Scratch",
				fr: "Double griffe",
				de: "Doppelkratzer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275183
	}
}

export default card
