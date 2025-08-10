import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [658],
	set: Set,

	name: {
		en: "Greninja ex",
		fr: "Amphinobi-ex",
		es: "Greninja ex",
		it: "Greninja-ex",
		pt: "Greninja ex",
		de: "Quajutsu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Shifting Shuriken",
			fr: "Shuriken Changeant",
			es: "Shuriken Cambiante",
			it: "Lame Mutevoli",
			pt: "Estrela Ninja Mutável",
			de: "Wandel-Shuriken"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 100 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 100 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 100 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 100 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics"
}

export default card
