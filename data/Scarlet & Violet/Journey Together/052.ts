import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Iono's Tadbulb",
		fr: "Têtampoule de Mashynn",
		es: "Tadbulb de e-Nigma",
		de: "Enigmaras Blipp",
		it: "Tadbulb di Kissara",
		pt: "Tadbulb da Kissera",
		'es-mx': "Tadbulb de e-Nigma"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Tiny Charge",
			fr: "Décharge Mineure",
			es: "Carga Diminuta",
			de: "Mini-Stromstoß",
			it: "Sottocarica Minuscola",
			pt: "Carga Pequenina",
			'es-mx': "Minicarga"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
