import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Wingull",
		fr: "Goélise",
		es: "Wingull",
		de: "Wingull",
		it: "Wingull",
		pt: "Wingull",
		'es-mx': "Wingull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			de: "Flattern",
			it: "Alabattito",
			pt: "Asa",
			'es-mx': "Aleteo"
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
