import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu",
		de: "Sterndu"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Continuous Spin",
				fr: "Rotation Continue",
				es: "Giro Continuo",
				it: "Eternogiro",
				pt: "Giro Contínuo",
				de: "Dauerdrehung"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 10 puntos de daño por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 10 danni ogni volta che esce testa.",
				pt: "Jogue uma moeda até sair coroa. Este ataque causa 10 de danos vezes o número de caras.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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
		cardmarket: 286275
	}
}

export default card
