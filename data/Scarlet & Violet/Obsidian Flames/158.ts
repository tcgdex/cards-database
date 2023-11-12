import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Draco",
		en: "Dragonair",
		es: "Dragonair",
		it: "Dragonair",
		pt: "Dragonair",
		de: "Dragonir"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Collision",
			en: "Ram",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 30
	}, {
		cost: ["Water", "Lightning"],

		name: {
			fr: "Draco-Queue",
			en: "Dragon Tail",
			es: "Cola Dragón",
			it: "Codadrago",
			pt: "Cauda do Dragão",
			de: "Drachenrute"
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