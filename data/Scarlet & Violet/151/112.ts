import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [112],
	set: Set,

	name: {
		fr: "Rhinoféros",
		en: "Rhydon",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Réduire en Poussière",
			en: "Wrack Down",
			es: "Desmoronar",
			it: "Abbattere",
			pt: "Desmoronar",
			de: "Niederschleudern"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			fr: "Perceuse Charismatique",
			en: "Charismatic Drill",
			es: "Taladro Carismático",
			it: "Trapano Carismatico",
			pt: "Broca Carismática",
			de: "Charismatischer Bohrer"
		},

		effect: {
			fr: "Si vous avez joué Charisme de Giovanni de votre main pendant ce tour, cette attaque inflige 140 dégâts supplémentaires.",
			en: "If you played Giovanni's Charisma from your hand during this turn, this attack does 140 more damage.",
			es: "Si has jugado una carta de Carisma de Giovanni de tu mano durante este turno, este ataque hace 140 puntos de daño más.",
			it: "Se hai giocato Carisma di Giovanni dalla tua mano durante questo turno, questo attacco infligge 140 danni in più.",
			pt: "Se você jogou Carisma do Giovanni da sua mão durante este turno, este ataque causará 140 pontos de dano a mais.",
			de: "Wenn du Giovannis Charisma während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 140 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		es: "Rhyhorn",
		it: "Rhyhorn",
		pt: "Rhyhorn",
		de: "Rihorn"
	}
}

export default card