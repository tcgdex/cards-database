import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Crocalor",
		fr: "Crocogril",
		es: "Crocalor",
		it: "Crocalor",
		pt: "Crocalor",
		de: "Lokroko"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Heat Breath",
			fr: "Souffle Ardent",
			es: "Aliento Ardiente",
			it: "Alitorovente",
			pt: "Bafo de Calor",
			de: "Heißer Atem"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 50 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Atsuya Uki"
}

export default card
