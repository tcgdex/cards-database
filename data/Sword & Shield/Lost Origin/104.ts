import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [620],
	set: Set,

	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		es: "Mienshao",
		it: "Mienshao",
		pt: "Mienshao",
		de: "Wie-Shu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
		es: "Mienfoo",
		it: "Mienfoo",
		pt: "Mienfoo",
		de: "Lin-Fu"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			es: "Destructor",
			it: "Botta",
			pt: "Pancada",
			de: "Klaps"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Double Smash",
			fr: "Double Broiement",
			es: "Golpe Doble",
			it: "Colpo Duplice",
			pt: "Bordoada Dupla",
			de: "Doppelstoß"
		},

		effect: {
			en: "Flip 2 coins. This attack does 70 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card