import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [814],
	set: Set,

	name: {
		'en-us': "Raboot",
		'fr-fr': "Lapyro",
		'es-es': "Raboot",
		'it-it': "Raboot",
		'pt-br': "Raboot",
		'de-de': "Kickerlo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Scorbunny",
		'fr-fr': "Flambino",
		'es-es': "Scorbunny",
		'it-it': "Scorbunny",
		'pt-br': "Scorbunny",
		'de-de': "Hopplo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Low Sweep",
			'fr-fr': "Balayette",
			'es-es': "Puntapié",
			'it-it': "Calciobasso",
			'pt-br': "Movimento Baixo",
			'de-de': "Fußtritt"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785880,
				tcgplayer: 567253
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785880,
				tcgplayer: 567253
			}
		},
	],

	illustrator: "aspara",

}

export default card
