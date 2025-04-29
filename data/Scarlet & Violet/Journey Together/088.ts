import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Toedscool",
		fr: "Terracool",
		es: "Toedscool",
		de: "Tentagra",
		it: "Toedscool",
		pt: "Toedscool",
		'es-mx': "Toedscool"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant",
			es: "Fluido Rociado",
			de: "Sprühwasser",
			it: "Fluidospray",
			pt: "Fluido Spray",
			'es-mx': "Rociar Líquido"
		},

		damage: 10
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
