import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Fearow",
		fr: "Rapasdepic",
		de: "Ibitak",
		it: "Fearow",
		es: "Fearow",
		pt: "Fearow",
		'es-mx': "Fearow"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",
	dexId: [22],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Repeating Drill",
			fr: "Multivrille",
			de: "Mehrfach-Bohrer",
			it: "Ripetitrapano",
			es: "Taladro",
			pt: "Broca Repetidora",
			'es-mx': "Taladro Persistente"
		},

		effect: {
			en: "Flip 5 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 5 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			de: "Wirf 5 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			it: "Lancia cinque volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			es: "Lanza 5 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			pt: "Jogue 5 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'es-mx': "Lanza 5 monedas. Este ataque hace 30 puntos de daño por cada cara."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654442
	}
}

export default card