import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Tandemaus",
		fr: "Compagnol",
		de: "Zwieps",
		it: "Tandemaus",
		es: "Tandemaus",
		pt: "Tandemaus"
	},

	illustrator: "yuu",
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
			de: "Doppelschlag",
			it: "Doppiosmash",
			es: "Doble Golpe",
			pt: "Golpe Duplo"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card