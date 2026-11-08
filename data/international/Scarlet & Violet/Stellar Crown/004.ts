import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi",
		'es-es': "Celebi",
		'it-it': "Celebi",
		'pt-br': "Celebi",
		'de-de': "Celebi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

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
			'pt-br': "Compre uma carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Leaf Step",
			'fr-fr': "Enjambée de Feuillage",
			'es-es': "Paso Hoja",
			'it-it': "Passofoglia",
			'pt-br': "Passo de Folha",
			'de-de': "Blattschritt"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785857,
				tcgplayer: 567230
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785857,
				tcgplayer: 567230
			}
		},
	],

	illustrator: "satoma",

}

export default card
