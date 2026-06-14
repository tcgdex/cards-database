import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "It moves while spinning around on its single foot. Some Baltoy have been seen spinning on their heads.",
	},


	name: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		'es-mx': "Baltoy",
		de: "Puppance",
		it: "Baltoy",
		pt: "Baltoy"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [343],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Continuous Spin",
			fr: "Rotation Continue",
			es: "Giro Continuo",
			'es-mx': "Giro Continuo",
			de: "Dauerdrehung",
			it: "Eternogiro",
			pt: "Giro Contínuo"
		},

		cost: ["Fighting"],
		damage: "30×",

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886438,
				tcgplayer: 693452
			}
		},
	],
}

export default card
