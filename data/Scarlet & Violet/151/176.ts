import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [61],
	set: Set,

	name: {
		fr: "Têtarte",
		en: "Poliwhirl",
		es: "Poliwhirl",
		it: "Poliwhirl",
		pt: "Poliwhirl",
		de: "Quaputzi"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Grosse Vague",
			en: "Wave Splash",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante",
			de: "Wellenplatscher"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			fr: "Bond de Grenouille",
			en: "Frog Hop",
			es: "Salto de la Rana",
			it: "Ranabalzo",
			pt: "Pulo de Sapo",
			de: "Froschhopser"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 60 more damage.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Gemi",

	thirdParty: {
		cardmarket: 733771
	}
}

export default card