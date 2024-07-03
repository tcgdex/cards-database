import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [556],
	set: Set,

	name: {
		en: "Maractus",
		fr: "Maracachi",
		es: "Maractus",
		it: "Maractus",
		pt: "Maractus",
		de: "Maracamba"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Draw",
			fr: "Double Pioche",
			es: "Roba Doble",
			it: "Pescata Doppia",
			pt: "Compra Dupla",
			de: "Zweifachzug"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée",
			es: "Pin Misil",
			it: "Missilspillo",
			pt: "Míssil de Espinhos",
			de: "Nadelrakete"
		},

		effect: {
			en: "Flip 4 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue 4 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card