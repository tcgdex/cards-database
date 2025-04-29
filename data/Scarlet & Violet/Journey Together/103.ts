import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Klink",
		fr: "Tic de N",
		es: "Klink de N",
		de: "Ns Klikk",
		it: "Klink di N",
		pt: "Klink do N",
		'es-mx': "Klink de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Spin",
			fr: "Double Tour",
			es: "Doble Giro",
			de: "Doppeldreher",
			it: "Doppioturbo",
			pt: "Giro Duplo",
			'es-mx': "Doble Giro"
		},

		effect: {
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
