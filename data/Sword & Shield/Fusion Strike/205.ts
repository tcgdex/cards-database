import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "0313",

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Continuous Steps",
			fr: "Pas Continus",
			de: "Dauerschritte",
			es: "Pasos Incesantes",
			pt: "Passos Contínuos",
			it: "Passi Regolari"
		},

		damage: "30×",

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			pt: "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card