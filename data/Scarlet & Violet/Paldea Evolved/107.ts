import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [57],
	set: Set,

	name: {
		fr: "Colossinge",
		en: "Primeape",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		fr: "Férosinge",
		en: "Mankey",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Balayage",
			en: "Low Kick",
			es: "Patada Baja",
			it: "Colpo Basso",
			pt: "Rasteira",
			de: "Fußkick"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Martelage",
			en: "Pummel",
			es: "Aporrear",
			it: "Legnata",
			pt: "Esmurrar",
			de: "Trommler"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 60 more damage.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Shin Nagasawa",

	thirdParty: {
		cardmarket: 709538
	}
}

export default card