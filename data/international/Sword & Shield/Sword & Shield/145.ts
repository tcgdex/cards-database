import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

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
				'en-us': "Glance",
				'fr-fr': "Coup d'Œil",
				'es-es': "Ojeada",
				'it-it': "Occhiatina",
				'pt-br': "Olhada de Relance",
				'de-de': "Kurzer Blick"
			},
			effect: {
				'en-us': "Look at the top card of your opponent's deck.",
				'fr-fr': "Regardez la carte du dessus du deck de votre adversaire.",
				'es-es': "Mira la primera carta de la baraja de tu rival.",
				'it-it': "Guarda la prima carta del mazzo del tuo avversario.",
				'pt-br': "Olhe a carta de cima do baralho do seu oponente.",
				'de-de': "Schau dir die oberste Karte des Decks deines Gegners an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Plumo-Queue",
				'es-es': "Plumerazo",
				'it-it': "Spazzasberla",
				'pt-br': "Tapa de Cauda",
				'de-de': "Kehrschelle"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "The way it brushes away grime with its tail can be helpful when cleaning. But its focus on spotlessness can make cleaning more of a hassle."
	},

	dexId: [572],

	thirdParty: {
		cardmarket: 436819,
		tcgplayer: 208464
	}
}

export default card
