import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Purugly G",
		fr: "Chaffreux ",
		de: "Shnurgarst G"
	},

	illustrator: "Ryota Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [432],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Chip Off",
				fr: "Grignoter",
				de: "Abspalten"
			},
			effect: {
				en: "If your opponent has 6 or more cards in his or her hand, discard a number of cards without looking until your opponent has 5 cards left in his or her hand.",
				fr: "Si votre adversaire possède plus de 6 cartes en main, défaussez des cartes sans regarder jusqu'à ce qu'il ne reste à votre adversaire que 5 cartes en main.",
				de: "Wenn dein Gegner mindestens 6 Karten auf der Hand hat, wähle davon so viele Karten (ohne sie dir vorher anzusehen) und lege sie auf den Ablagestapel deines Gegners, bis dein Gegner nur noch 5 Karten auf der Hand hat."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poor Sleep",
				fr: "Sommeil agité",
				de: "Unruhiger Schlaf"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage and Purugly G is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires et Chaffreux  est maintenant Endormi.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu und Shnurgarst G schläft jetzt."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88466,
				cardmarket: 278509
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278509,
				tcgplayer: 88466
			}
		}
	],

}

export default card
