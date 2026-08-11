import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Yungoos",
		'fr-fr': "Manglouton",
		'de-de': "Mangunior",
		'it-it': "Yungoos",
		'es-es': "Yungoos",
		'pt-br': "Yungoos",
		'es-mx': "Yungoos"
	},

	illustrator: "Mékayu",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [734],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'es-es': "Coleccionar",
			'pt-br': "Coleta",
			'es-mx': "Recolectar"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
			'es-es': "Roer",
			'pt-br': "Roída",
			'es-mx': "Mordisquear"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851180,
				tcgplayer: 654448
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851180,
				tcgplayer: 654448
			}
		},
	],
}

export default card
