import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Kangourex-ex",
		en: "Kangaskhan ex",
		es: "Kangaskhan ex",
		it: "Kangaskhan-ex",
		pt: "Kangaskhan ex",
		de: "Kangama-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Triple Pioche",
			en: "Triple Draw",
			es: "Triple Robo",
			it: "Pescata Tripla",
			pt: "Compra Tripla",
			de: "Dreifachzug"
		},

		effect: {
			fr: "Piochez 3 cartes.",
			en: "Draw 3 cards.",
			es: "Roba 3 cartas.",
			it: "Pesca tre carte.",
			pt: "Compre 3 cartas.",
			de: "Ziehe 3 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Coups de Poing Incessants",
			en: "Incessant Punching",
			es: "Puñetazo Incesante",
			it: "Pugni Incessanti",
			pt: "Socos Incessantes",
			de: "Dreschfest"
		},

		effect: {
			fr: "Lancez 4 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			en: "Flip 4 coins. This attack does 100 damage for each heads.",
			es: "Lanza 4 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			pt: "Jogue 4 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "N-DESIGN Inc."
}

export default card