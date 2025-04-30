import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Combusken",
		fr: "Galifeu",
		es: "Combusken",
		de: "Jungglut",
		it: "Combusken",
		pt: "Combusken",
		'es-mx': "Combusken"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			de: "Schlitzer",
			it: "Lacerazione",
			pt: "Talho",
			'es-mx': "Cuchillada"
		},

		damage: 50
	}],

	retreat: 2,
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
