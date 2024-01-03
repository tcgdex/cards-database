import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Magicarpe",
		en: "Magikarp",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Éclabousseur Expert",
			en: "Expert Splasher",
			es: "As del Chapoteo",
			it: "Specialista di Splash",
			pt: "Borrifador Experiente",
			de: "Platschexperte"
		},

		effect: {
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 20 dégâts supplémentaires.",
			en: "Flip 2 coins. If both of them are heads, this attack does 20 more damage.",
			es: "Lanza 2 monedas. Si sale cara en ambas, este ataque hace 20 puntos de daño más.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 20 pontos de dano a mais.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card