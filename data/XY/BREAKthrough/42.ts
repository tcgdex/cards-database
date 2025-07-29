import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Simipour",
		fr: "Flotoutan",
		es: "Simipour",
		it: "Simipour",
		pt: "Simipour",
		de: "Sodachita"
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
		en: "Panpour",
		fr: "Flotajou",
		es: "Panpour",
		it: "Panpour",
		pt: "Panpour",
		de: "Sodamak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Green Fling",
				fr: "Dégommage Plante",
				es: "Lanzamiento Verde",
				it: "Erbalancio",
				pt: "Arremesso Verde",
				de: "Pflanzenwurf"
			},
			effect: {
				en: "Put 3 Grass Energy cards from your discard pile into your hand.",
				fr: "Prenez 3 cartes Énergie Grass dans votre pile de défausse et ajoutez-les à votre main.",
				es: "Pon 3 cartas de Energía Grass de tu pila de descartes en tu mano.",
				it: "Prendi tre carte Energia Grass dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque 3 cards de Energia Grass da sua pilha de descarte em sua mão.",
				de: "Nimm 3 Grass-Energiekarten von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hand Fling",
				fr: "Catapu-Main",
				es: "Golpe de Mano",
				it: "Manofionda",
				pt: "Arremesso de Mão",
				de: "Handwurf"
			},
			effect: {
				en: "This attack does 10 damage times the number of cards in your hand.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de cartes dans votre main.",
				es: "Este ataque hace 10 puntos de daño por cada carta de tu mano.",
				it: "Questo attacco infligge 10 danni per ogni carta che hai in mano.",
				pt: "Este ataque causa 10 de danos vezes o número de cards em sua mão.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der Karten auf deiner Hand zu."
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

	thirdParty: {
		cardmarket: 286288
	}
}

export default card
