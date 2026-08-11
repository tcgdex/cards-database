import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'es-mx': "Charjabug",
		'de-de': "Akkup",
		'it-it': "Charjabug",
		'pt-br': "Charjabug"
	},

	illustrator: "Kazuhisa Uragami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [737],
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Grubbin"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'es-es': "Agarre",
			'es-mx': "Fuerza de Garra",
			'de-de': "Klammer",
			'it-it': "Presa",
			'pt-br': "Agarramento Compressor"
		},

		cost: ["Lightning"],

		damage: 30
	}, {
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'es-mx': "Colisión",
			'de-de': "Ramme",
			'it-it': "Carica",
			'pt-br': "Aríete"
		},

		cost: ["Lightning", "Lightning"],

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895813,
				tcgplayer: 704782
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895813,
				tcgplayer: 704782
			}
		},
	],
}

export default card
