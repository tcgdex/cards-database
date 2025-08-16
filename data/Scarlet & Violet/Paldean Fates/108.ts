import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [953],
	set: Set,

	name: {
		en: "Rellor",
		fr: "Léboulérou",
		es: "Rellor",
		it: "Rellor",
		pt: "Rellor",
		de: "Relluk"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ball Roll",
			fr: "Boulé-Roulade",
			es: "Rodabola",
			it: "Rotopalla",
			pt: "Rolo Bola",
			de: "Ballrolle"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Misa Tsutsui"
}

export default card