import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Petilil",
		fr: "Chlorobule",
		es: "Petilil",
		de: "Lilminip",
		it: "Petilil",
		pt: "Petilil",
		'es-mx': "Petilil"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			es: "Paso Hoja",
			de: "Blattschritt",
			it: "Passofoglia",
			pt: "Passo de Folha",
			'es-mx': "Paso de Hoja"
		},

		damage: 30
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
