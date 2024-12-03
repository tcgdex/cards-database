import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Houndstone ex",
		fr: "Tomberro-ex",
		es: "Houndstone ex",
		it: "Houndstone-ex",
		pt: "Houndstone ex",
		de: "Friedwuff-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Horrifying Fang",
			fr: "Croc Horrifiant",
			es: "Colmillo Terrorífico",
			it: "Zanna Orripilante",
			pt: "Caninos Aterrorizantes",
			de: "Grauenhafter Reißer"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño más por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano a mais para cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "100+"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card