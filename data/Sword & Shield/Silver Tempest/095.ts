import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [347],
	set: Set,

	name: {
		en: "Anorith",
		fr: "Anorith",
		es: "Anorith",
		it: "Anorith",
		pt: "Anorith",
		de: "Anorith"
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
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Fossil Drop",
			fr: "Chute Fossile",
			es: "Caída de Fósil",
			it: "Caduta Fossili",
			pt: "Queda de Fóssil",
			de: "Fossilabwurf"
		},

		effect: {
			en: "You may discard an Unidentified Fossil card from your hand. If you do, this attack does 120 more damage.",
			fr: "Vous pouvez défausser une carte Fossile Inconnu de votre main. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Puedes descartar 1 carta de Fósil Desconocido de tu mano. Si lo haces, este ataque hace 120 puntos de daño más.",
			it: "Puoi scartare una carta Fossile Sconosciuto che hai in mano. Se lo fai, questo attacco infligge 120 danni in più.",
			pt: "Você pode descartar 1 carta Fóssil Não Identificado da sua mão. Se fizer isto, este ataque causará 120 pontos de dano a mais.",
			de: "Du kannst 1 Unbekanntes Fossil-Karte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682142
	}
}

export default card