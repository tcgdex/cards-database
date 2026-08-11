import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [511],
	set: Set,

	name: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
		'de-de': "Vegimak",
		'it-it': "Pansage",
		'pt-br': "Pansage",
		'es-es': "Pansage",
		'es-mx': "Pansage"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
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
			type: "normal",
			thirdParty: {
				cardmarket: 835910,
				tcgplayer: 642453
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835910,
				tcgplayer: 642453
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836261,
				tcgplayer: 642698
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836271,
				tcgplayer: 642626
			}
		}
	],
}

export default card
