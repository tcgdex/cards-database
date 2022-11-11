import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Glalie",
		fr: "Oniglali",
		es: "Glalie",
		it: "Glalie",
		pt: "Glalie",
		de: "Firnontor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		it: "Snorunt",
		pt: "Snorunt",
		de: "Schneppke"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 60
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Big Mouth",
			fr: "Grande Bouche",
			es: "Boca Grande",
			it: "Granbocca",
			pt: "Bocão",
			de: "Großmaul"
		},

		effect: {
			en: "If you played Candice from your hand during this turn, this attack does 130 more damage.",
			fr: "Si vous avez joué Gladys de votre main pendant ce tour, cette attaque inflige 130 dégâts supplémentaires.",
			es: "Si has jugado 1 carta de Inverna de tu mano durante este turno, este ataque hace 130 puntos de daño más.",
			it: "Se hai giocato Bianca dalla tua mano durante questo turno, questo attacco infligge 130 danni in più.",
			pt: "Se você jogou Candice da sua mão durante este turno, este ataque causará 130 pontos de dano a mais.",
			de: "Wenn du Frida während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 130 Schadenspunkte mehr zu."
		},

		damage: "130+"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card