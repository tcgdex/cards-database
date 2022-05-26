import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Cranidos",
		fr: "Kranidos",
		es: "Cranidos",
		it: "Cranidos",
		pt: "Cranidos",
		de: "Koknodon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
		es: "Fósil Desconocido",
		it: "Fossile Sconosciuto",
		pt: "Fóssil Não Identificado",
		de: "Unbekanntes Fossil"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Stone Edge",
			fr: "Lame de Roc",
			es: "Roca Afilada",
			it: "Pietrataglio",
			pt: "Gume de Pedra",
			de: "Steinkante"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card