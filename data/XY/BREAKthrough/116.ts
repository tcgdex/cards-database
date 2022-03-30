import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Doduo",
		es: "Doduo",
		it: "Doduo",
		pt: "Doduo",
		de: "Dodu"
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
				en: "Double Stab",
				fr: "Entaille Double",
				es: "Doble Puñalada",
				it: "Doppia Pugnalata",
				pt: "Estocada Dupla",
				de: "Doppelstich"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 10 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Doduo Delivery",
				fr: "Livraison Doduo",
				es: "Reparto Doduo",
				it: "Consegna Doduo",
				pt: "Entrega de Doduo",
				de: "Dodu-Lieferung"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cards.",
				de: "Ziehe 2 Karten."
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



}

export default card
