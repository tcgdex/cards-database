import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Glimmet",
		fr: "Germéclat",
		es: "Glimmet",
		it: "Glimmet",
		pt: "Glimmet",
		de: "Lumispross"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rock Hurl",
			fr: "Lance-Pierre",
			es: "Lanzamiento de Rocas",
			it: "Scaglia Pietre",
			pt: "Lançamento de Pedras",
			de: "Steinschleuderer"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card