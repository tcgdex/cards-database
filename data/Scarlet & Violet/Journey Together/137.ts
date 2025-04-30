import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Cramorant",
		fr: "Nigosier",
		es: "Cramorant",
		de: "Urgl",
		it: "Cramorant",
		pt: "Cramorant",
		'es-mx': "Cramorant"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ceaseless Spitting",
			fr: "Crachement Incessant",
			es: "Escupitajo Incesante",
			de: "Pausenloses Spucken",
			it: "Sputo Incessante",
			pt: "Cusparada Incessante",
			'es-mx': "Escupitajo Incesante"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 50 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 50 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara."
		},

		damage: "50×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
