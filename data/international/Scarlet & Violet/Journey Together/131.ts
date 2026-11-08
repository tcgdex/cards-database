import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [819],
	set: Set,

	name: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand",
		'es-es': "Skwovet",
		'de-de': "Raffel",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
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
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'es-mx': "Recolectar"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
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
	regulationMark: "H",
	illustrator: "sowsow",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817283,
				tcgplayer: 623558
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817283,
				tcgplayer: 623558
			}
		},
	],
}

export default card
