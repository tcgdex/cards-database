import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [734],
	set: Set,

	name: {
		fr: "Manglouton",
		en: "Yungoos",
		es: "Yungoos",
		it: "Yungoos",
		pt: "Yungoos",
		de: "Mangunior"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Asticotage",
			en: "Knock Away",
			es: "Derribar",
			it: "Scaraventa",
			pt: "Jogar Longe",
			de: "Zurückschlagen"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card