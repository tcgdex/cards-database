import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Lickilicky",
		'fr-fr': "Coudlangue",
		'es-es': "Lickilicky",
		'it-it': "Lickilicky",
		'pt-br': "Lickilicky",
		'de-de': "Schlurplek"
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
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'pt-br': "Lickitung",
		'de-de': "Schlurp"
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
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
				'es-es': "Desarme",
				'it-it': "Privazione",
				'pt-br': "Derrubar",
				'de-de': "Abschlag"
			},
			effect: {
				'en-us': "Discard a random card from your opponent's hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
				'pt-br': "Descarte um card aleatório da mão de seu oponente.",
				'de-de': "Nimm 1 zufällige Karte aus der verdeckten Hand deines Gegners und lege sie auf dessen Ablagestapel."
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
				'en-us': "Lickichop",
				'fr-fr': "Poing Baveux",
				'es-es': "Lickigolpe",
				'it-it': "Leccacolpo",
				'pt-br': "Lambida Ferroada",
				'de-de': "Schlurstakkato"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 30 de danos adicionais para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	description: {
		'en-us': "It wraps things with its extensible tongue. Getting too close to it will leave you soaked with drool.",
	},

	thirdParty: {
		cardmarket: 281743,
		tcgplayer: 92259
	}
}

export default card
