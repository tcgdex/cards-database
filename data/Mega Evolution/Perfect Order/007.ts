import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
		es: "Scatterbug",
		'es-mx': "Scatterbug",
		de: "Purmel",
		it: "Scatterbug",
		pt: "Scatterbug"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			'es-mx': "Mordisquear",
			de: "Nagen",
			it: "Rosicchiamento",
			pt: "Roída"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J"
}

export default card