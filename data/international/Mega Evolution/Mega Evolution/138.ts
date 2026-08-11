import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'de-de': "Vulpix",
		'it-it': "Vulpix",
		'es-es': "Vulpix",
		'pt-br': "Vulpix",
		'es-mx': "Vulpix"
	},

	illustrator: "saino misaki",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [37],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'de-de': "Zertrampeln",
			'it-it': "Fuggi Fuggi",
			'es-es': "Estampida",
			'pt-br': "Estouro",
			'es-mx': "Estampida"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'de-de': "Glühen",
			'it-it': "Fuoco Continuo",
			'es-es': "Combustión",
			'pt-br': "Combustão",
			'es-mx': "Combustión"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851209,
				tcgplayer: 654477
			}
		},
	],
}

export default card
