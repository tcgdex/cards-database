import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Yungoos",
		fr: "Manglouton",
		de: "Mangunior",
		it: "Yungoos",
		es: "Yungoos",
		pt: "Yungoos",
		'es-mx': "Yungoos"
	},

	illustrator: "Mékayu",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			de: "Sammeln",
			it: "Tassa",
			es: "Coleccionar",
			pt: "Coleta",
			'es-mx': "Recolectar"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			es: "Roba 1 carta.",
			pt: "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			de: "Nagen",
			it: "Rosicchiamento",
			es: "Roer",
			pt: "Roída",
			'es-mx': "Mordisquear"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654448
	}
}

export default card