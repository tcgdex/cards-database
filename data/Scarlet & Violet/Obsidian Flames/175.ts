import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [659],
	set: Set,

	name: {
		fr: "Sapereau",
		en: "Bunnelby",
		es: "Bunnelby",
		it: "Bunnelby",
		pt: "Bunnelby",
		de: "Scoppel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Pied-Piétine",
			en: "Stompy Stomp",
			es: "Pisotonazo",
			it: "Pesto Ripesto",
			pt: "Pisada",
			de: "Hopphopphurra"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card