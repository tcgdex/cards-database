import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Lechonk",
		fr: "Gourmelet",
		es: "Lechonk",
		de: "Ferkuli",
		it: "Lechonk",
		pt: "Lechonk",
		'es-mx': "Lechonk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			de: "Ramme",
			it: "Carica",
			pt: "Aríete",
			'es-mx': "Colisión"
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
