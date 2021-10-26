import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Crabominable",
		fr: "Crabominable",
		es: "Crabominable",
		it: "Crabominable",
		pt: "Crabominable",
		de: "Krawell"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
		es: "Crabrawler",
		it: "Crabrawler",
		pt: "Crabrawler",
		de: "Krabbox"
	},

	attacks: [{
		name: {
			en: "Double Lariat",
			fr: "Double Lasso",
			es: "Doble Lazo",
			it: "Doppio Lazzo",
			pt: "Laço Duplo",
			de: "Doppel-Lasso"
		},

		effect: {
			en: "Flip 2 coins. This attack does 90 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×",
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse",
			es: "Martillazo",
			it: "Martellata",
			pt: "Martelo Caranguejo",
			de: "Krabbhammer"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Before it stops to think, it just starts pummeling. There are records of its turning back avalanches with a flurry of punches."
	}
}

export default card