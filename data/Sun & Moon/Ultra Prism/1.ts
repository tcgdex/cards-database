import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		it: "Exeggcute",
		pt: "Exeggcute",
		de: "Owei"
	},
	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		102,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Continuous Eggsplosion",
				fr: "Éclate Continue",
				es: "Explosión Huevo Continua",
				it: "Ovosplosioni Continue",
				pt: "Ovo Explosivo Contínuo",
				de: "Dauernde Eggsplosion"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
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
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
