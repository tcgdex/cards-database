import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Mareep",
		fr: "Wattouat",
		de: "Voltilamm",
		it: "Mareep",
		es: "Mareep",
		pt: "Mareep"
	},

	illustrator: "Narumi Sato",
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

		damage: 10
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			de: "Elektroball",
			it: "Energisfera",
			es: "Bola Voltio",
			pt: "Bola Elétrica"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card