import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [261],
	set: Set,

	name: {
		en: "Poochyena",
		fr: "Medhyèna",
		es: "Poochyena",
		it: "Poochyena",
		pt: "Poochyena",
		de: "Fiffyen"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Continuous Steps",
			fr: "Pas Continus",
			es: "Pasos Incesantes",
			it: "Passi Regolari",
			pt: "Passos Contínuos",
			de: "Dauerschritte"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 10 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			pt: "Presa Sombria",
			de: "Fänge der Dunkelheit"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shibuzoh.",

	thirdParty: {
		cardmarket: 769287
	}
}

export default card