import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Wailmer",
		fr: "Wailmer",
		es: "Wailmer",
		de: "Wailmer",
		it: "Wailmer",
		pt: "Wailmer",
		'es-mx': "Wailmer"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			de: "Surfer",
			it: "Surf",
			pt: "Surfar",
			'es-mx': "Surf"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
