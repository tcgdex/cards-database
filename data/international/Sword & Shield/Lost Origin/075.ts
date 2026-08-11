import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [570],
	set: Set,

	name: {
		'en-us': "Hisuian Zorua",
		'fr-fr': "Zorua de Hisui",
		'es-es': "Zorua de Hisui",
		'it-it': "Zorua di Hisui",
		'pt-br': "Zorua de Hisui",
		'de-de': "Hisui-Zorua"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre 1 carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Mumble",
			'fr-fr': "Murmure",
			'es-es': "Farfullar",
			'it-it': "Borbottio",
			'pt-br': "Resmungo",
			'de-de': "Grummeln"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674088,
				tcgplayer: 283954
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674088,
				tcgplayer: 283954
			}
		},
	],
}

export default card
