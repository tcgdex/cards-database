import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Simisear",
		'fr-fr': "Flamoutan",
		'es-es': "Simisear",
		'it-it': "Simisear",
		'pt-br': "Simisear",
		'de-de': "Grillchita"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		514,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
		'es-es': "Pansear",
		'it-it': "Pansear",
		'pt-br': "Pansear",
		'de-de': "Grillmak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Water Fling",
				'fr-fr': "Dégommage Eau",
				'es-es': "Lanzamiento Agua",
				'it-it': "Acqualancio",
				'pt-br': "Arremesso de Água",
				'de-de': "Wasserwurf"
			},
			effect: {
				'en-us': "Put 3 Water Energy cards from your discard pile into your hand.",
				'fr-fr': "Prenez 3 cartes Énergie Water dans votre pile de défausse et ajoutez-les à votre main.",
				'es-es': "Pon 3 cartas de Energía Water de tu pila de descartes en tu mano.",
				'it-it': "Prendi tre carte Energia Water dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 3 cards de Energia Water da sua pilha de descarte em sua mão.",
				'de-de': "Nimm 3 Water-Energiekarten von deinem Ablagestapel auf deine Hand."
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
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets.",
	},

	thirdParty: {
		cardmarket: 286270,
		tcgplayer: 107143
	}
}

export default card
