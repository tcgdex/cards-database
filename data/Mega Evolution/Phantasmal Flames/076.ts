import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		'es-mx': "Jigglypuff",
		de: "Pummeluff",
		it: "Jigglypuff",
		pt: "Jigglypuff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [39],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ball Roll",
			fr: "Boulé-Roulade",
			es: "Rodabola",
			'es-mx': "Bola Rodante",
			de: "Ballrolle",
			it: "Rotopalla",
			pt: "Rolo Bola"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857651
	}
}

export default card