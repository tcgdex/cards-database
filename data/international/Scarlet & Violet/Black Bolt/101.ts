import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [515],
	set: Set,

	name: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
		'de-de': "Sodamak",
		'it-it': "Panpour",
		'pt-br': "Panpour",
		'es-es': "Panpour",
		'es-mx': "Panpour"
	},

	illustrator: "Hoshino KURO",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'es-es': "Coleccionar",
			'es-mx': "Recolectar"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'es-es': "Roba 1 carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'es-es': "Arañazo",
			'es-mx': "Arañazo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836109,
				tcgplayer: 642554
			}
		},
	]
}

export default card
