import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Impidimp",
		fr: "Grimalin",
		es: "Impidimp",
		de: "Bähmon",
		it: "Impidimp",
		pt: "Impidimp",
		'es-mx': "Impidimp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			pt: "Tapinha",
			'es-mx': "Cachetadita"
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
