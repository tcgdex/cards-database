import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

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
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Magnum Punch",
			'fr-fr': "Poing Magnum",
			'es-es': "Puño Mágnum",
			'it-it': "Superpugno",
			'pt-br': "Soco Magnum",
			'de-de': "Magnum-Schlag"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785900,
				tcgplayer: 567272
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785900,
				tcgplayer: 567272
			}
		},
	],

	illustrator: "Oswaldo KATO",

}

export default card
