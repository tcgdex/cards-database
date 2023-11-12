import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Kabuto",
		en: "Kabuto",
		es: "Kabuto",
		it: "Kabuto",
		pt: "Kabuto",
		de: "Kabuto"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Double Écorchure",
			en: "Double Scratch",
			es: "Arañazo Doble",
			it: "Doppio Graffio",
			pt: "Arranhão Duplo",
			de: "Doppelkratzer"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 70 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card