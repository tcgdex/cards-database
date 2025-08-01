import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [191],
	set: Set,

	name: {
		en: "Sunkern",
		fr: "Tournegrin",
		es: "Sunkern",
		it: "Sunkern",
		pt: "Sunkern",
		de: "Sonnkern"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bullet Seed",
			fr: "Balle Graine",
			es: "Semilladora",
			it: "Semitraglia",
			pt: "Projétil de Semente",
			de: "Kugelsaat"
		},

		effect: {
			en: "Flip 4 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 4 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Naoyo Kimura",

	thirdParty: {
		cardmarket: 769180
	}
}

export default card