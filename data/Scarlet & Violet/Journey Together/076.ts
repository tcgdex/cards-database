import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Cubone",
		fr: "Osselait",
		es: "Cubone",
		de: "Tragosso",
		it: "Cubone",
		pt: "Cubone",
		'es-mx': "Cubone"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			'es-mx': "Estampida"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			es: "Puño Ligero",
			de: "Leichter Hieb",
			it: "Pugnetto",
			pt: "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
