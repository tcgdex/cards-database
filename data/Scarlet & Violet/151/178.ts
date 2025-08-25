import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [114],
	set: Set,

	name: {
		fr: "Saquedeneu",
		en: "Tangela",
		es: "Tangela",
		it: "Tangela",
		pt: "Tangela",
		de: "Tangela"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Emmêlement Délicat",
			en: "Tactful Tangling",
			es: "Enredo Sutil",
			it: "Groviglio Gentile",
			pt: "Emaranhamento Delicado",
			de: "Taktvolles Knäuel"
		},

		effect: {
			fr: "Si vous avez joué Invitation d'Erika de votre main pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
			en: "If you played Erika's Invitation from your hand during this turn, this attack does 60 more damage.",
			es: "Si has jugado una carta de Invitación de Erika de tu mano durante este turno, este ataque hace 60 puntos de daño más.",
			it: "Se hai giocato Invito di Erika dalla tua mano durante questo turno, questo attacco infligge 60 danni in più.",
			pt: "Se você jogou Convite da Érica da sua mão durante este turno, este ataque causará 60 pontos de dano a mais.",
			de: "Wenn du Erikas Einladung während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Oswaldo KATO",

	thirdParty: {
		cardmarket: 733709
	}
}

export default card