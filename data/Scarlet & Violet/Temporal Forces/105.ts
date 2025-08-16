import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [261],
	set: Set,

	name: {
		en: "Poochyena",
		fr: "Medhyèna",
		es: "Poochyena",
		it: "Poochyena",
		pt: "Poochyena",
		de: "Fiffyen"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Gnaw Off",
			fr: "Rongement",
			es: "Roer Completamente",
			it: "Rosicchia Via",
			pt: "Corroer",
			de: "Abnagen"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Miki Tanaka",

	thirdParty: {
		cardmarket: 760735
	}
}

export default card