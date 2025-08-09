import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [115],
	set: Set,

	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		de: "Kangama",
		it: "Kangaskhan",
		es: "Kangaskhan",
		pt: "Kangaskhan",
		'es-mx': "Kangaskhan"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			es: "Bofetada Gentil",
			pt: "Tapinha",
			'es-mx': "Cachetadita"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dizzy Punch",
			fr: "Uppercut",
			de: "Irrschlag",
			it: "Stordipugno",
			es: "Puño Mareo",
			pt: "Soco Estonteante",
			'es-mx': "Puño Mareador"
		},

		effect: {
			en: "Flip 2 coins. This attack does 90 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
			es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara."
		},

		damage: "90×"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card