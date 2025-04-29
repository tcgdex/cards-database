import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Skwovet",
		fr: "Rongourmand",
		es: "Skwovet",
		de: "Raffel",
		it: "Skwovet",
		pt: "Skwovet",
		'es-mx': "Skwovet"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			de: "Sammeln",
			it: "Tassa",
			pt: "Coleta",
			'es-mx': "Recolectar"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			de: "Nagen",
			it: "Rosicchiamento",
			pt: "Roída",
			'es-mx': "Mordisquear"
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
