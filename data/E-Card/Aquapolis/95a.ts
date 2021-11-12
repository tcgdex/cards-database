import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		fr: "M.Mime"
	},

	category: "Pokemon",

	abilities: [{
		name: {
			fr: "Barrière d'énergie"
		},

		effect: {
			fr: "Si M. Mime devait subir les dégâts d'une attaque, réduisez ces dégâts de 10 pour chaque carte Énergie de base attachée à M. Mime. La quantité maximum de dégâts pouvant être réduits par la Barrière d'énergie est 20."
		},

		type: "Poke-BODY"
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Choc mémoriel"
		},

		effect: {
			fr: "N'appliquez ni la Faiblesse, ni la Résistance."
		},

		damage: 20
	}]
}

export default card