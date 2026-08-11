import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [77],
	set: Set,

	name: {
		'fr-fr': "Ponyta",
		'en-us': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'pt-br': "Ponyta",
		'de-de': "Ponita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Collecte",
			'en-us': "Collect",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'fr-fr': "Piochez une carte.",
			'en-us': "Draw a card.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Flop",
			'en-us': "Flop",
			'es-es': "Vuelta",
			'it-it': "Tonfo",
			'pt-br': "Baque",
			'de-de': "Plumps"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "If you've been accepted by Ponyta, its burning mane is mysteriously no longer hot to the touch.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733672,
				tcgplayer: 516601,
				cardtrader: 261142
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733672,
				tcgplayer: 516601,
				cardtrader: 261142
			}
		},
	],

	illustrator: "Nurikabe",

	
}

export default card
