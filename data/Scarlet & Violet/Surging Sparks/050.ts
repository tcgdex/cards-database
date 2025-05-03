import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Quaxly",
		fr: "Coiffeton",
		es: "Quaxly",
		it: "Quaxly",
		pt: "Quaxly",
		de: "Kwaks"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Aerial Ace",
			fr: "Aéropique",
			es: "Golpe Aéreo",
			it: "Aeroassalto",
			pt: "Ás dos Ares",
			de: "Aero-Ass"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
