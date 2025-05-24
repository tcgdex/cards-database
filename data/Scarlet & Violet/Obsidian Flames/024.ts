import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Pimito",
		en: "Capsakid",
		es: "Capsakid",
		it: "Capsakid",
		pt: "Capsakid",
		de: "Chilingel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Double Coup d'Boule",
			en: "Double Headbutt",
			es: "Doble Cabezazo",
			it: "Doppia Bottintesta",
			pt: "Cabeçada Dupla",
			de: "Doppelte Kopfnuss"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 50 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Pani Kobayashi"
}

export default card