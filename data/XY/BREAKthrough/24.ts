import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Simisear",
		fr: "Flamoutan",
		es: "Simisear",
		it: "Simisear",
		pt: "Simisear",
		de: "Grillchita"
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
		en: "Pansear",
		fr: "Flamajou",
		es: "Pansear",
		it: "Pansear",
		pt: "Pansear",
		de: "Grillmak"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Water Fling",
				fr: "Dégommage Eau",
				es: "Lanzamiento Agua",
				it: "Acqualancio",
				pt: "Arremesso de Água",
				de: "Wasserwurf"
			},
			effect: {
				en: "Put 3 Water Energy cards from your discard pile into your hand.",
				fr: "Prenez 3 cartes Énergie Water dans votre pile de défausse et ajoutez-les à votre main.",
				es: "Pon 3 cartas de Energía Water de tu pila de descartes en tu mano.",
				it: "Prendi tre carte Energia Water dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque 3 cards de Energia Water da sua pilha de descarte em sua mão.",
				de: "Nimm 3 Water-Energiekarten von deinem Ablagestapel auf deine Hand."
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
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
