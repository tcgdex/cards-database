import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [572],
	set: Set,

	name: {
		'fr-fr': "Chinchidou",
		'en-us': "Minccino",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},

	illustrator: "MAHOU",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		name: {
			'fr-fr': "Coup d'Œil",
			'en-us': "Glance",
			'es-es': "Ojeada",
			'it-it': "Occhiatina",
			'pt-br': "Olhada de Relance",
			'de-de': "Kurzer Blick"
		},

		effect: {
			'fr-fr': "Regardez la carte du dessus du deck de votre adversaire.",
			'en-us': "Look at the top card of your opponent's deck.",
			'es-es': "Mira la primera carta de la baraja de tu rival.",
			'it-it': "Guarda la prima carta del mazzo del tuo avversario.",
			'pt-br': "Olhe a carta de cima do baralho do seu oponente.",
			'de-de': "Schau dir die oberste Karte des Decks deines Gegners an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Plumo-Queue",
			'en-us': "Tail Slap",
			'es-es': "Plumerazo",
			'it-it': "Spazzasberla",
			'pt-br': "Tapa de Cauda",
			'de-de': "Kehrschelle"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "The way it brushes away grime with its tail can be helpful when cleaning. But its focus on spotlessness can make cleaning more of a hassle."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539853,
				tcgplayer: 232479
			}
		},
	],
}

export default card
