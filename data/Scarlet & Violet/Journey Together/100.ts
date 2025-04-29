import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Lokix",
		fr: "Gambex",
		es: "Lokix",
		de: "Lextremo",
		it: "Lokix",
		pt: "Lokix",
		'es-mx': "Lokix"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Low Sweep",
			fr: "Balayette",
			es: "Puntapié",
			de: "Fußtritt",
			it: "Calciobasso",
			pt: "Movimento Baixo",
			'es-mx': "Barredora"
		},

		damage: 60
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
