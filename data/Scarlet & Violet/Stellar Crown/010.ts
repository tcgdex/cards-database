import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [829],
	set: Set,

	name: {
		en: "Gossifleur",
		fr: "Tournicoton",
		es: "Gossifleur",
		it: "Gossifleur",
		pt: "Gossifleur",
		de: "Cottini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Spin",
			fr: "Double Tour",
			es: "Doble Giro",
			it: "Doppioturbo",
			pt: "Giro Duplo",
			de: "Doppeldreher"
		},

		effect: {
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Heisuke Kitazawa",

	thirdParty: {
		cardmarket: 785863
	}
}

export default card
