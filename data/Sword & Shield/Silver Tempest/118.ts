import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Metang",
		fr: "Métang",
		es: "Metang",
		it: "Metang",
		pt: "Metang",
		de: "Metang"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
		es: "Beldum",
		it: "Beldum",
		pt: "Beldum",
		de: "Tanhel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Bullet Punch",
			fr: "Pisto-Poing",
			es: "Puño Bala",
			it: "Pugnoscarica",
			pt: "Soco Projétil",
			de: "Patronenhieb"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano a mais para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "30+"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card