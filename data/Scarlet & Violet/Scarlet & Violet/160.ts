import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Tandemaus",
		fr: "Compagnol",
		es: "Tandemaus",
		it: "Tandemaus",
		pt: "Tandemaus",
		de: "Zwieps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Double Hit",
			fr: "Coup Double",
			es: "Doble Golpe",
			it: "Doppiosmash",
			pt: "Golpe Duplo",
			de: "Doppelschlag"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card