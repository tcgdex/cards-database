import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'de-de': "Thermopod",
		'it-it': "Sizzlipede",
		'es-es': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'es-mx': "Sizzlipede"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [850],

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'it-it': "Carica",
			'es-es': "Apisonar",
			'pt-br': "Aríete",
			'es-mx': "Colisión"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'de-de': "Glühen",
			'it-it': "Fuoco Continuo",
			'es-es': "Combustión",
			'pt-br': "Combustão",
			'es-mx': "Combustión"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851100,
				tcgplayer: 654368
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851100,
				tcgplayer: 654368
			}
		},
	],
}

export default card
