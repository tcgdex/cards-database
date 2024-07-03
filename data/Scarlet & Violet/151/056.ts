import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [56],
	set: Set,

	name: {
		fr: "Férosinge",
		en: "Mankey",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Mania",
			en: "Thrash",
			es: "Saña",
			it: "Colpo",
			pt: "Castigar",
			de: "Fuchtler"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 20 dégâts. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			en: "Flip a coin. If tails, this Pokémon also does 20 damage to itself. If heads, this attack does 20 more damage.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 20 puntos de daño a sí mismo. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 20 danni a se stesso. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair coroa, este Pokémon também causará 20 pontos de dano a si mesmo. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 20 Schadenspunkte zu. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card