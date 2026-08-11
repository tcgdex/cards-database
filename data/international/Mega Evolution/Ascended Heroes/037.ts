import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Raboot",
		'fr-fr': "Lapyro",
		'es-es': "Raboot",
		'es-mx': "Raboot",
		'de-de': "Kickerlo",
		'it-it': "Raboot",
		'pt-br': "Raboot"
	},

	evolveFrom: {
		'en-us': "Scorbunny",
		'fr-fr': "Flambino",
		'es-es': "Scorbunny",
		'es-mx': "Scorbunny",
		'de-de': "Hopplo",
		'it-it': "Scorbunny",
		'pt-br': "Scorbunny",
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	dexId: [814],
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Low Sweep",
			'fr-fr': "Balayette",
			'es-es': "Puntapié",
			'es-mx': "Barredora",
			'de-de': "Fußtritt",
			'it-it': "Calciobasso",
			'pt-br': "Movimento Baixo"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'es-mx': "Combustión",
			'de-de': "Glühen",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão"
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

	description: {
		'en-us': "While it prides itself on its varied kicking moves, it can also deliver powerful headbutts once its flames have heated up its forehead.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869648,
			tcgplayer: 675849
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870198,
			tcgplayer: 676883
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870197,
			tcgplayer: 677023
		}
	},
],
}

export default card
