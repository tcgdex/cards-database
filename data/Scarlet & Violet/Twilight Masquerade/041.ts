import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [60],
	set: Set,

	name: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		pt: "Poliwag",
		de: "Quapsel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tail Rap",
			fr: "Frap'Keu",
			es: "Coleada",
			it: "Mano-Coda",
			pt: "Batida de Cauda",
			de: "Schweifklopfen"
		},

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card