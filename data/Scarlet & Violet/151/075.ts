import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [75],
	set: Set,

	name: {
		fr: "Gravalanch",
		en: "Graveler",
		es: "Graveler",
		it: "Graveler",
		pt: "Graveler",
		de: "Georok"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		fr: "Racaillou",
		en: "Geodude",
		es: "Geodude",
		it: "Geodude",
		pt: "Geodude",
		de: "Kleinstein"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Canon à Pierres",
			en: "Rock Cannon",
			es: "Cañón Roca",
			it: "Rocciocannone",
			pt: "Canhão de Rochas",
			de: "Felskanone"
		},

		effect: {
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 40 dégâts pour chaque côté face.",
			en: "Flip a coin until you get tails. This attack does 40 damage for each heads.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 40 pontos de dano para cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Gros Impact",
			en: "Heavy Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Uta",

	thirdParty: {
		cardmarket: 733670
	}
}

export default card