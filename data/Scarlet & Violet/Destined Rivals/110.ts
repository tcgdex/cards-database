import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Meditite",
		fr: "Méditikka",
		de: "Meditie",
		it: "Meditite",
		es: "Meditite",
		pt: "Meditite"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Feint",
			fr: "Ruse",
			de: "Offenlegung",
			it: "Fintoattacco",
			es: "Amago",
			pt: "Fintar"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			pt: "O dano deste ataque não é afetado por Resistência."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card