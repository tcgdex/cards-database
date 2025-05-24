import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Brindibou",
		de: "Bauz",
		es: "Rowlet",
		pt: "Rowlet",
		it: "Rowlet",
		en: "Rowlet"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Saut",
			de: "Draufspringen",
			es: "Asaltar",
			pt: "Pular em Cima",
			it: "Salta Su",
			en: "Jump On"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			en: "Flip a coin. If heads, this attack does 10 more damage."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "Flies noiselessly on delicate wings. It has mastered the art of deftly launching dagger-sharp feathers from those same wings."
	}
}

export default card