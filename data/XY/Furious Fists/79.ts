import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
		es: "Lickilicky",
		it: "Lickilicky",
		pt: "Lickilicky",
		de: "Schlurplek"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		463,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
		es: "Lickitung",
		it: "Lickitung",
		pt: "Lickitung",
		de: "Schlurp"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
				es: "Desarme",
				it: "Privazione",
				pt: "Derrubar",
				de: "Abschlag"
			},
			effect: {
				en: "Discard a random card from your opponent's hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
				es: "Descarta 1 carta aleatoria de la mano de tu rival.",
				it: "Scarta una carta a caso dalla mano del tuo avversario.",
				pt: "Descarte um card aleatório da mão de seu oponente.",
				de: "Nimm 1 zufällige Karte aus der verdeckten Hand deines Gegners und lege sie auf dessen Ablagestapel."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lickichop",
				fr: "Poing Baveux",
				es: "Lickigolpe",
				it: "Leccacolpo",
				pt: "Lambida Ferroada",
				de: "Schlurstakkato"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda até sair coroa. Este ataque causa 30 de danos adicionais para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 281743,
		tcgplayer: 92259
	}
}

export default card
