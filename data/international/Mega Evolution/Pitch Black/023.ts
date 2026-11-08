import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'es-es': "Electrike",
		'es-mx': "Electrike",
		'de-de': "Frizelbliz",
		'it-it': "Electrike",
		'pt-br': "Electrike"
	},

	illustrator: "Dsuke",
	rarity: "Common",
	category: "Pokemon",
	dexId: [309],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'es-mx': "Recolectar",
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'pt-br': "Coleta"
		},

		cost: ["Lightning"],

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'es-mx': "Roba 1 carta.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta."
		}
	}, {
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'es-mx': "Tacleada",
			'de-de': "Tackle",
			'it-it': "Azione",
			'pt-br': "Investida"
		},

		cost: ["Lightning", "Lightning"],

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895811,
				tcgplayer: 704780
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895811,
				tcgplayer: 704780
			}
		},
	],
}

export default card
