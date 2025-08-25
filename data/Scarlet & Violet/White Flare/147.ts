import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [634],
	set: Set,

	name: {
		en: "Zweilous",
		fr: "Diamat",
		de: "Duodino",
		it: "Zweilous",
		pt: "Zweilous",
		es: "Zweilous",
		'es-mx': "Zweilous"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Double Hit",
			fr: "Coup Double",
			de: "Doppelschlag",
			it: "Doppiosmash",
			pt: "Golpe Duplo",
			es: "Doble Golpe",
			'es-mx': "Doble Golpe"
		},

		effect: {
			en: "Flip 2 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara."
		},

		damage: "40×"
	}, {
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			en: "Pitch-Black Fangs",
			fr: "Crocs Nuit Noire",
			de: "Pechschwarze Fänge",
			it: "Zanne Buiopesto",
			pt: "Presas do Breu",
			es: "Colmillos Azabaches",
			'es-mx': "Colmillos Umbríos"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836025
	}
}

export default card