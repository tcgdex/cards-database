import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Simipour",
		'fr-fr': "Flotoutan",
		'es-es': "Simipour",
		'it-it': "Simipour",
		'pt-br': "Simipour",
		'de-de': "Sodachita"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		516,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
		'es-es': "Panpour",
		'it-it': "Panpour",
		'pt-br': "Panpour",
		'de-de': "Sodamak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Green Fling",
				'fr-fr': "Dégommage Plante",
				'es-es': "Lanzamiento Verde",
				'it-it': "Erbalancio",
				'pt-br': "Arremesso Verde",
				'de-de': "Pflanzenwurf"
			},
			effect: {
				'en-us': "Put 3 Grass Energy cards from your discard pile into your hand.",
				'fr-fr': "Prenez 3 cartes Énergie Grass dans votre pile de défausse et ajoutez-les à votre main.",
				'es-es': "Pon 3 cartas de Energía Grass de tu pila de descartes en tu mano.",
				'it-it': "Prendi tre carte Energia Grass dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 3 cards de Energia Grass da sua pilha de descarte em sua mão.",
				'de-de': "Nimm 3 Grass-Energiekarten von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hand Fling",
				'fr-fr': "Catapu-Main",
				'es-es': "Golpe de Mano",
				'it-it': "Manofionda",
				'pt-br': "Arremesso de Mão",
				'de-de': "Handwurf"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of cards in your hand.",
				'fr-fr': "Cette attaque inflige 10 dégâts multipliés par le nombre de cartes dans votre main.",
				'es-es': "Este ataque hace 10 puntos de daño por cada carta de tu mano.",
				'it-it': "Questo attacco infligge 10 danni per ogni carta che hai in mano.",
				'pt-br': "Este ataque causa 10 de danos vezes o número de cards em sua mão.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der Karten auf deiner Hand zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail.",
	},

	thirdParty: {
		cardmarket: 286288,
		tcgplayer: 107161
	}
}

export default card
