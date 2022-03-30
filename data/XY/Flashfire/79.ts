import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "M Kangaskhan EX",
		fr: "M-Kangourex EX",
		es: "M-Kangaskhan EX",
		it: "M Kangaskhan EX",
		pt: "M-Kangaskhan EX",
		de: "M-Kangama EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		115,
	],

	hp: 230,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Kangaskhan-EX",
		fr: "Kangourex-EX",
		es: "Kangaskhan-EX",
		it: "Kangaskhan-EX",
		pt: "Kangaskhan-EX",
		de: "Kangama-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wham Bam Punch",
				fr: "Poing Boum",
				es: "Pum Catapum",
				it: "Scazzottata",
				pt: "Soco Violento",
				de: "Ratzfatz Punch"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda até sair coroa. Este ataque causa 30 de danos adicionais para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "100+",

		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX"
}

export default card
