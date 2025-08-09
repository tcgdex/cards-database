import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [749],
	set: Set,

	name: {
		en: "Mudbray",
		fr: "Tiboudet",
		de: "Pampuli",
		it: "Mudbray",
		es: "Mudbray",
		pt: "Mudbray",
		'es-mx': "Mudbray"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Running Charge",
			fr: "Assaut Élancé",
			de: "Sturmangriff",
			it: "Carica Scattante",
			es: "Carga Impulso",
			pt: "Carga em Disparada",
			'es-mx': "Carga Encarrerada"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 40 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 40 dégâts pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni ogni volta che esce testa.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño por cada cara.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 40 pontos de dano para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño por cada cara."
		},

		damage: "40×"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card