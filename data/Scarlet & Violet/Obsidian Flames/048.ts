import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [418],
	set: Set,

	name: {
		fr: "Mustébouée",
		en: "Buizel",
		es: "Buizel",
		it: "Buizel",
		pt: "Buizel",
		de: "Bamelin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Vive-Attaque",
			en: "Quick Attack",
			es: "Ataque Rápido",
			it: "Attacco Rapido",
			pt: "Ataque Rápido",
			de: "Ruckzuckhieb"
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
	},

	illustrator: "Jerky",

	thirdParty: {
		cardmarket: 725128
	}
}

export default card