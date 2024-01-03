import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Pika Strike",
			fr: "Pika Frappe",
			es: "Pika Impacto",
			it: "Pikacolpo",
			pt: "Golpe Pikachu",
			de: "Pika-Schlag"
		},

		effect: {
			en: "If 1 of your Dedenne used Dede-Short during your last turn, this attack does 180 more damage.",
			fr: "Si l'un de vos Dedenne a utilisé Dede-Court-Circuit pendant votre dernier tour, cette attaque inflige 180 dégâts supplémentaires.",
			es: "Si 1 de tus Dedenne usó Dede-Cortocircuito durante tu último turno, este ataque hace 180 puntos de daño más.",
			it: "Se uno dei tuoi Dedenne ha usato Cortocircuito Dede durante il tuo ultimo turno, questo attacco infligge 180 danni in più.",
			pt: "Se 1 dos seus Dedenne usou Dedecurto durante o seu último turno, este ataque causará 180 pontos de dano a mais.",
			de: "Wenn 1 deiner Dedenne während deines letzten Zuges Dede-Kurzschluss eingesetzt hat, fügt diese Attacke 180 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card