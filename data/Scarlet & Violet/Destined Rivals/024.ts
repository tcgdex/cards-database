import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Toedscool",
		fr: "Terracool",
		de: "Tentagra",
		it: "Toedscool",
		es: "Toedscool",
		pt: "Toedscool"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Furious Kicks",
			fr: "Coups de Pied Rageurs",
			de: "Zorntritte",
			it: "Calci Furiosi",
			es: "Patadas Furiosas",
			pt: "Chutes de Fúria"
		},

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card