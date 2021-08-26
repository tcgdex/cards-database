import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Luxray BREAK",
		fr: "Luxray TURBO",
		es: "Luxray TURBO",
		it: "Luxray TURBO",
		pt: "Luxray TURBO",
		de: "Luxtra-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		405,
	],

	hp: 170,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Luxray",
		fr: "Luxray",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Fury",
				fr: "Furie Sauvage",
				es: "Furia Salvaje",
				it: "Urtoferoce",
				pt: "Fúria Selvagem",
				de: "Wilde Wut"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño más por cada cara.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue uma moeda até sair coroa. Este ataque causa 40 de danos adicionais para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Dieser Angriff fügt 40 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "130+",

		}
	],

	retreat: 0
}

export default card
