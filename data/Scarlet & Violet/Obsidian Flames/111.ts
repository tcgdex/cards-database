import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [529],
	set: Set,

	name: {
		fr: "Rototaupe",
		en: "Drilbur",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Botte Secrète",
			en: "Rising Lunge",
			es: "Embestida Ascendente",
			it: "Elevazione",
			pt: "Investida Ascendente",
			de: "Aufwärtsstoß"
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

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card