import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Minccino",
		fr: "Chinchidou",
		de: "Picochilla",
		it: "Minccino",
		pt: "Minccino",
		es: "Minccino",
		'es-mx': "Minccino"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Slap",
			fr: "Plumo-Queue",
			de: "Kehrschelle",
			it: "Spazzasberla",
			pt: "Tapa de Cauda",
			es: "Plumerazo",
			'es-mx': "Golpe de Cola"
		},

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836060
	}
}

export default card