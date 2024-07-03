import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [183],
	set: Set,

	name: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ball Roll",
			fr: "Boulé-Roulade",
			es: "Rodabola",
			it: "Rotopalla",
			pt: "Rolo Bola",
			de: "Ballrolle"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 10 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico",
			de: "Magischer Schuss"
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card