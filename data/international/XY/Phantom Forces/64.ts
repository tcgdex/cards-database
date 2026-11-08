import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Escavalier",
		'fr-fr': "Lançargot",
		'es-es': "Escavalier",
		'it-it': "Escavalier",
		'pt-br': "Escavalier",
		'de-de': "Cavalanzas"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		589,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
		'es-es': "Karrablast",
		'it-it': "Karrablast",
		'pt-br': "Karrablast",
		'de-de': "Laukaps"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Poke Through",
				'fr-fr': "Percée Indésirable",
				'es-es': "Pinchar",
				'it-it': "Spioncino",
				'pt-br': "Poke Travessia",
				'de-de': "Durchlöchern"
			},
			effect: {
				'en-us': "Discard a random card from your opponent's hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
				'pt-br': "Descarte um card aleatório da mão de seu oponente.",
				'de-de': "Nimm 1 zufällige Karte aus der verdeckten Hand deines Gegners und lege sie auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Rush",
				'fr-fr': "Course en Spirale",
				'es-es': "Avalancha Espiral",
				'it-it': "Raffica a Spirale",
				'pt-br': "Arremetida Espiral",
				'de-de': "Spiralsturmangriff"
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
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Wearing the shell covering they stole from Shelmet, they defend themselves and attack with two lances.",
	},

	thirdParty: {
		cardmarket: 281870,
		tcgplayer: 94632
	}
}

export default card
