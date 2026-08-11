import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Simisage",
		'fr-fr': "Feuiloutan",
		'es-es': "Simisage",
		'it-it': "Simisage",
		'pt-br': "Simisage",
		'de-de': "Vegichita"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		512,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
		'es-es': "Pansage",
		'it-it': "Pansage",
		'pt-br': "Pansage",
		'de-de': "Vegimak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fire Fling",
				'fr-fr': "Dégommage Feu",
				'es-es': "Lanzamiento Fuego",
				'it-it': "Fuocolancio",
				'pt-br': "Arremesso de Fogo",
				'de-de': "Feuerwurf"
			},
			effect: {
				'en-us': "Put 3 Fire Energy cards from your discard pile into your hand.",
				'fr-fr': "Prenez 3 cartes Énergie Fire dans votre pile de défausse et ajoutez-les à votre main.",
				'es-es': "Pon 3 cartas de Energía Fire de tu pila de descartes en tu mano.",
				'it-it': "Prendi tre carte Energia Fire dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 3 cards de Energia Fire da sua pilha de descarte em sua mão.",
				'de-de': "Nimm 3 Fire-Energiekarten von deinem Ablagestapel auf deine Hand."
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
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter.",
	},

	thirdParty: {
		cardmarket: 286252,
		tcgplayer: 107125
	}
}

export default card
