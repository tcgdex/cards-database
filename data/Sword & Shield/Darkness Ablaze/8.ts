import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Karrablast",
		fr: "Carabing",
		es: "Karrablast",
		it: "Karrablast",
		pt: "Karrablast",
		de: "Laukaps"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Continuous Headbutt",
				fr: "Coup d’Boule Sans Fin",
				es: "Golpe Cabeza Continuo",
				it: "Bottintesta Continue",
				pt: "Cabeçada Contínua",
				de: "Anhaltender Kopfstoß"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
				fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
