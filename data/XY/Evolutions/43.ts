import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
		es: "Nidoran♂",
		it: "Nidoran♂",
		pt: "Nidoran♂",
		de: "Nidoran♂"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Double Stab",
				fr: "Entaille Double",
				es: "Doble Puñalada",
				it: "Doppia Pugnalata",
				pt: "Facada Dupla",
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
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
