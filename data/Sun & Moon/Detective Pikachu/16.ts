import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Excelangue",
		es: "Lickitung",
		it: "Lickitung",
		pt: "Lickitung",
		de: "Schlurp"
	},

	illustrator: "MPC Film",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		108,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Lick",
				fr: "Langue Sans Fin",
				es: "Lengüetazo Incesante",
				it: "Leccata Infinita",
				pt: "Lambida Contínua",
				de: "Dauerschlecker"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 370778
	}
}

export default card
