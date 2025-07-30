import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [61],
	set: Set,

	name: {
		en: "Poliwhirl",
		fr: "Têtarte",
		es: "Poliwhirl",
		it: "Poliwhirl",
		pt: "Poliwhirl",
		de: "Quaputzi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		pt: "Poliwag",
		de: "Quapsel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			es: "Puño Ligero",
			it: "Pugnetto",
			pt: "Soco de Luz",
			de: "Leichter Hieb"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Double Smash",
			fr: "Double Broiement",
			es: "Golpe Doble",
			it: "Colpo Duplice",
			pt: "Bordoada Dupla",
			de: "Doppelstoß"
		},

		effect: {
			en: "Flip 2 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674042
	}
}

export default card