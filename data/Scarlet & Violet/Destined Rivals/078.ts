import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Wattrel",
		fr: "Zapétrel",
		de: "Voltrel",
		it: "Wattrel",
		es: "Wattrel",
		pt: "Wattrel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			de: "Statischer Schock",
			it: "Shock Statico",
			es: "Impacto Estático",
			pt: "Choque de Estática"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card