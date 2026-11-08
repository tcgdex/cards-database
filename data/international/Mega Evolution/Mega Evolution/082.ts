import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nacli",
		'fr-fr': "Selutin",
		'de-de': "Geosali",
		'it-it': "Nacli",
		'es-es': "Nacli",
		'pt-br': "Nacli",
		'es-mx': "Nacli"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [932],

	attacks: [{
		cost: ["Colorless"],

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
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851153,
				tcgplayer: 654421
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851153,
				tcgplayer: 654421
			}
		},
	],
}

export default card
