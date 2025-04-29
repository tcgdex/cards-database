import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Drampa",
		fr: "Draïeul",
		es: "Drampa",
		de: "Sen-Long",
		it: "Drampa",
		pt: "Drampa",
		'es-mx': "Drampa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
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

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			es: "Garra Dragón",
			de: "Drachenklaue",
			it: "Dragartigli",
			pt: "Garra de Dragão",
			'es-mx': "Garra Dragón"
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
