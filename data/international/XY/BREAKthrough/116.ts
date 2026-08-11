import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
		'es-es': "Doduo",
		'it-it': "Doduo",
		'pt-br': "Doduo",
		'de-de': "Dodu"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
	],

	hp: 60,

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
				'en-us': "Double Stab",
				'fr-fr': "Entaille Double",
				'es-es': "Doble Puñalada",
				'it-it': "Doppia Pugnalata",
				'pt-br': "Estocada Dupla",
				'de-de': "Doppelstich"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 10 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Doduo Delivery",
				'fr-fr': "Livraison Doduo",
				'es-es': "Reparto Doduo",
				'it-it': "Consegna Doduo",
				'pt-br': "Entrega de Doduo",
				'de-de': "Dodu-Lieferung"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cards.",
				'de-de': "Ziehe 2 Karten."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The brains in its two heads appear to communicate emotions to each other with a telepathic power.",
	},

	thirdParty: {
		cardmarket: 286361,
		tcgplayer: 107235
	}
}

export default card
