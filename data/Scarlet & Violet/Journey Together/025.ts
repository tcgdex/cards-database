import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Torkoal",
		fr: "Chartor",
		es: "Torkoal",
		de: "Qurtel",
		it: "Torkoal",
		pt: "Torkoal",
		'es-mx': "Torkoal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			es: "Carbón Activado",
			de: "Glühende Kohlen",
			it: "Carboni Ardenti",
			pt: "Carvão Vivo",
			'es-mx': "Carbón Activado"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
			es: "Explosión de Calor",
			de: "Hitzestoß",
			it: "Caldobomba",
			pt: "Raio de Calor",
			'es-mx': "Explosión Ígnea"
		},

		damage: 110
	}],

	retreat: 3,
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
