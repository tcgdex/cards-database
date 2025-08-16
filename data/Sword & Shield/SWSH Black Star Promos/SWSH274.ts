import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [408],
	set: Set,

	name: {
		fr: "Kranidos",
		de: "Koknodon",
		es: "Cranidos",
		pt: "Cranidos",
		it: "Cranidos",
		en: "Cranidos"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Fossile Inconnu",
		de: "Unbekanntes Fossil",
		es: "Fósil Desconocido",
		pt: "Fóssil Não Identificado",
		it: "Fossile Sconosciuto",
		en: "Unidentified Fossil"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Collision",
			de: "Ramme",
			es: "Apisonar",
			pt: "Aríete",
			it: "Carica",
			en: "Ram"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Lame de Roc",
			de: "Steinkante",
			es: "Roca Afilada",
			pt: "Gume de Pedra",
			it: "Pietrataglio",
			en: "Stone Edge"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			en: "Flip a coin. If heads, this attack does 40 more damage."
		},

		damage: "40+"
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "Its hard skull is its distinguishing feature. It snapped trees by headbutting them, and then it fed on their ripe berries."
	},

	thirdParty: {
		cardmarket: 684386
	}
}

export default card